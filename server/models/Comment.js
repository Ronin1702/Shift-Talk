const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 6,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

  complaint: {
    type: Schema.Types.ObjectId,
    ref: 'Complaint',
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
