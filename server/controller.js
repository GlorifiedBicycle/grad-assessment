const Note = require('./controller');
const User = require('./controller');


const userController = {

  createUser(req, res, next) {
    console.log('trying to create user');
    console.log(User);
  },


  viewUser(req, res, next) {
    
  },


  updateUser(req, res, next) {
    
  },


  deleteUser(req, res, next) {
    
  },
};


const notesController = {

  createNote(req, res, next) {
    console.log('trying to create note');
    console.log(Note);
  },


  readNote(req, res, next) {

  },


  updateNote(req, res, next) {

  },


  deleteNote(req, res, next) {

  }
};


module.exports = userController;
module.exports = notesController;