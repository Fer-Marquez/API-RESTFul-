const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require ('mongoose-paginate-v2');
// const bcryptjs = requqire('bcryptjs');

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
  active: {
    type: Boolean,
    // default: false,
    required: false
  },
  update_at: {
    type: String,
    required: false}
  }, {
    timestamps: true
});
usersSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Users', usersSchema);
