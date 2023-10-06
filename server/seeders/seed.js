const db = require('../config/connection');
const { User, Complaint, Comment, Car } = require('../models');
const userSeeds = require('./users.json');
const complaintSeeds = require('./complaints.json');
const commentSeeds = require('./comments.json');
const carSeeds = require('./cars.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Complaint', 'complaints');
    await cleanDB('User', 'users');
    await cleanDB('Comment', 'comments');
    await cleanDB('Car', 'cars');

    await User.create(userSeeds);
    await Car.create(carSeeds);
    await Comment.create(commentSeeds);

    for (let i = 0; i < complaintSeeds.length; i++) {
      const { _id, author } = await Complaint.create(complaintSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: author },
        {
          $addToSet: {
            complaints: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
