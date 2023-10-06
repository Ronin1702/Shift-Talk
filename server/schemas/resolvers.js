const { User, Car, Complaint, Comment } = require('../models');
const { GraphQLError } = require('graphql');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    car: async (parent, args) => {
      console.log('args:', args);
      const carIdentified = await Car.findById(args._id);
      const complaints = await Complaint.find({ car: carIdentified._id });
      return {  ...carIdentified._doc, complaints };
    },
    user: async (parent, args) => {
      const userIdentified = await User.findById(args._id);
      // Get and return all documents from the classes collection
      return userIdentified
    },

    complaints: async ({ _id }) => {
      // Get and return all documents from the classes collection
      return await Complaint.car.findById({ _id });
    },
    complaint: async ({ _id }) => {
      return await Complaint.findById({ _id });
    },
    comments: async ({ _id }) => {
      return await Comment.complaint.findById({ _id });
    },
    comment: async ({ _id }) => {
      return await Comment.findById({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return await User.create({ username, email, password });
    },
    login: async (parent, { username, password }) => {
      return await User.findOne({ username });
    },
    addComplaint: async (parent, args, context) => {

      // Remember to change the hardcoded id to context.user._id when we have authentication
      const userIdentified = await User.findById('651f5552b36de0f5e406f5ac');
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
        author: username, // Assuming User has a username field
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

      const userIdentified = await User.findById('651f5552b36de0f5e406f5ac');
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
  },
};

module.exports = resolvers;
