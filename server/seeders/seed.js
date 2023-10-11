require('dotenv').config();
const db = require('../config/connection');
const { Car } = require('../models');
const carSeeds = require('./cars.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Car', 'cars');

    await Car.create(carSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
