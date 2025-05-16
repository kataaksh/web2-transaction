const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    trim: true,
    maxLength: 20,
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: 20,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User
};
