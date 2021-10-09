const Note = require('./controller');
const User = require('./controller');
const Login = require('./controller');

const loginController = {
  // on login
  // store input username and input password
  // find user in db by username
  // if user not found, prompt to create new user
  // if user found, check password entered by user
  // if password not match, alert "username or password incorrect"
  // if password match, alert "login successful" and display notes entered by user
  // on logout, hide notes and display login
}


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