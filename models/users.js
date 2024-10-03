const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
},
last_name: {
  type: String,
  required: true
  },
  created_at: {
    type: String,
    required: true
  },
  update_at: {
    type: String,
    required: true}
  }, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
