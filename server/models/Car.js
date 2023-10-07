const { Schema, model } = require('mongoose');

const carsSchema = new Schema({
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
});

carsSchema.index({ make: 1, model: 1, year: 1 }, { unique: true });

const Car = model('Car', carsSchema);

module.exports = Car;
