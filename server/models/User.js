const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    complaints: [{ type: Schema.Types.ObjectId, ref: 'Complaint' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    orders: [Order.schema],
    // role:{
    //   type: String,
    //   required: true,
    //   default: 'user'
    // }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.virtual('complaintCount').get(function () {
  return this.complaints.length;
});

const User = model('User', userSchema);

module.exports = User;
