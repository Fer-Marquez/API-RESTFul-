const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
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
    required: false
  },
  update_at: {
    type: String,
    required: true}
  }, {
    timestamps: true
});

module.exports = mongoose.model('Users', usersSchema);
