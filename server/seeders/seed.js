const db = require('../config/connection');
const { User, Complaint, Comment, Car } = require('../models');
const userSeeds = require('./users.json');
const complaintSeeds = require('./complaints.json');
const commentSeeds = require('./comments.json');
const carSeeds = require('./cars.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    // await cleanDB('Complaint', 'complaints');
    // await cleanDB('User', 'users');
    // await cleanDB('Comment', 'comments');
    await cleanDB('Car', 'cars');

    await Car.create(carSeeds);

    for (let i = 0; i < carSeeds.length; i++) {
      const { make, model, year } = await Car.create(carSeeds[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
