const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: {
      type: String,
      required: true
    },
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
    required: false
},
last_name: {
  type: String,
  required: false
  },
  created_at: {
    type: String,
    required: false
  },
  update_at: {
    type: String,
    required: false}
  }, {
    timestamps: true
});

module.exports = mongoose.model('Users', usersSchema);
