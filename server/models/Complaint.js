const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const complaintsSchema = new Schema({
  complaintText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 6,
    trim: true,
  },
  complaintAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 6,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const  Complaint = model('Complaint', complaintsSchema);

module.exports = Complaint;
