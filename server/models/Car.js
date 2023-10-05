const { Schema, model } = require('mongoose');
const  complaintSchema = require('./Complaint');

const carsSchema = new Schema({
  car: {
    type: String,
    make: String,
    model: String,
    year: Number,
    required: 'You Must Enter a car make model and year',
  },
  complaints: [complaintSchema],
});

const Car = model('car', carsSchema);

module.exports = Car;
