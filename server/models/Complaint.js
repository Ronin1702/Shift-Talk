const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const complaintsSchema = new Schema({
  text: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 6,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Complaint = model('Complaint', complaintsSchema);

module.exports = Complaint;
