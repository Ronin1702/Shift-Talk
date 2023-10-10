const { User, Car, Complaint, Comment } = require('../models');
const { GraphQLError } = require('graphql');
const { signToken, AuthenticationError } = require('../utils/auth');
const bcrypt = require('bcrypt');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    car: async (parent, args) => {
      const { make, model, year } = args;
      console.log('args:', args);
      // find car by make, model, and year
      const carIdentified = await Car.findOne({ make, model, year });
      // check if car exists
      if (!carIdentified) {
        throw new GraphQLError('Cannot find car by given information');
      }
      const complaints = await Complaint.find({ car: carIdentified._id });
      return { ...carIdentified._doc, complaints };
    },

    user: async (parent, args) => {
      const userIdentified = await User.findById(args._id);
      // Get and return all documents from the classes collection
      return userIdentified;
    },

    complaints: async (parent, args) => {
      return await Complaint.find({ car: args.carId });
    },
    complaint: async (parent, args) => {
      return await Complaint.findById(args._id).populate('comments');
    },
    comments: async (parent, args) => {
      return await Comment.find({ complaint: args.complaintId }).populate(
        'user'
      );
    },
    comment: async (parent, args) => {
      return await Comment.findById(args._id);
    },
    me: async (parent, args, context, info) => {
      console.log('Context from me query:', context.user);
      // console.log('Parent Path from me query:', parent);
      // console.log('Args Path from me query:', args);
      // console.log('Info Path from me query:', info);
      // if no user object, throw authentication error
      if (context.user) {
        // initialize variables
        return User.findOne({ _id: context.user._id }).populate(`complaints`);
      }
      throw new GraphQLError('Failed to Execute me Query from Resolvers.js');
    },
  },
  Car: {
    complaints: async (car) => {
      return await Complaint.find({ car: car._id });
    },
  },
  User: {
    //in our case a user cannot create a car, they can make a complaint about a car, or add a comment to a complaint, and only under that complaint they can see which car they were complaining about.
    complaints: async (user) => {
      return await Complaint.find({ user: user._id });
    },
  },

  Complaint: {
    car: async (complaint) => {
      return await Car.findById(complaint.car);
    },
    user: async (complaint) => {
      return await User.findById(complaint.user);
    },
    comments: async (complaint) => {
      return await Comment.find({ complaint: complaint._id });
    },
  },

  Comment: {
    user: async (comment) => {
      return await User.findById(comment.user);
    },
    complaint: async (comment) => {
      return await Complaint.findById(comment.complaint);
    },
    car: async (comment) => {
      const relatedComplaint = await Complaint.findById(comment.complaint);
      return await Car.findById(relatedComplaint.car);
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addComplaint: async (parent, args, context) => {
      // Remember to change the hardcoded id to context.user._id when we have authentication
      // const userIdentified = await User.findById('651f5552b36de0f5e406f5ac');
      const userIdentified = await User.findById(context.user._id);
      console.log('Context from addComplaint mutation:', context.user);
      const carIdentified = await Car.findById(args.carId);
      const username = userIdentified.username;

      if (!userIdentified) {
        throw new GraphQLError('Cannot find user by given ID');
      }

      if (!carIdentified) {
        throw new GraphQLError('Cannot find car by given ID');
      }

      const complaint = await Complaint.create({
        text: args.text,
        author: username,
        car: carIdentified._id,
        user: userIdentified._id,
      });
      await User.findByIdAndUpdate(userIdentified._id, {
        $push: { complaints: complaint._id },
      });
      await Car.findByIdAndUpdate(carIdentified._id, {
        $push: { complaints: complaint._id },
      });
      return complaint;
    },

    addComment: async (parent, args, context) => {
      const userIdentified = await User.findById(context.user._id);
      console.log('Context from addComment mutation:', context.user);
      const complaintIdentified = await Complaint.findById(args.complaintId);
      const username = userIdentified.username;

      if (!userIdentified) {
        throw new GraphQLError('Cannot find user by given ID');
      }
      if (!complaintIdentified) {
        throw new GraphQLError('Cannot find complaint by given ID');
      }

      const comment = await Comment.create({
        text: args.commentText,
        author: username, // Assuming User has a username field
        user: userIdentified._id,
        complaint: complaintIdentified._id,
      });
      await User.findByIdAndUpdate(userIdentified._id, {
        $push: { comments: comment._id },
      });
      await Complaint.findByIdAndUpdate(complaintIdentified._id, {
        $push: { comments: comment._id },
      });

      return comment;
    },
    addCar: async (parent, { make, model, year }) => {
      return await Car.create({ make, model, year });
    },

    removeComplaint: async (parent, { complaintId }, context) => {
      // if no user object, throw authentication error
      if (context.user) {
        // Delete the complaint
        const deletedComplaint = await Complaint.findByIdAndDelete(complaintId);
        if (!deletedComplaint) {
          throw new GraphQLError('No complaint found with this ID!');
        }

        // Update the user's document to remove the deleted complaintId
        await User.findByIdAndUpdate(context.user._id, {
          $pull: { complaints: complaintId },
        });

        await Comment.deleteMany({ complaint: complaintId });

        return deletedComplaint;
      }

      throw new GraphQLError('You need to be logged in to remove a complaint!');
    },

    updateMe: async (parent, args, context) => {
      if (context.user) {
        // Check if the current password is correct before updating the password
        if (args.currentPassword) {
          const user = await User.findById(context.user._id);
          const correctPw = await user.isCorrectPassword(args.currentPassword);

          if (!correctPw) {
            throw new GraphQLError('Incorrect current password.');
          }
        }
        if (args.password) {
          const saltRounds = 10;
          args.password = await bcrypt.hash(args.password, saltRounds);
        }
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          args,
          {
            new: true,
            runValidators: true,
          }
        );

        return updatedUser;
      }
      throw new GraphQLError('Failed to updateMe!');
    },
  },
};

module.exports = resolvers;
