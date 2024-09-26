const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
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
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);
