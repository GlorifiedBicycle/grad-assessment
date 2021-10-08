const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema ({
  givenName: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  cohort: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
});

const User = mongoose.model('user', UserSchema);

const NoteSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Note = mongoose.model('note', NoteSchema);

module.exports = Student, User;