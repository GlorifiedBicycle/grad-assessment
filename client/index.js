function logMeIn() {
  const username = document.querySelector('#loginUsername');
  const password = document.querySelector('#loginPassword');
  console.log([username.value, password.value]);
  // if username matches a user in the db,
  // if password matches the password on that user,
  // display the user's notes
  // else alert: "Invalid Username or Password"
}


function signMeUp() {
  const loginScreen = document.querySelector('#loginScreen');
  const createUserScreen = document.querySelector('#createUserScreen');
  loginScreen.style.display = 'none';
  createUserScreen.style.display = 'inline';
}


function createNewUser() {
  const newUser = document.querySelector('#createUsername');
  const newPassword = document.querySelector('#createPassword');
  console.log([newUser.value, newPassword.value]);
}


function backToLogin() {
  const loginScreen = document.querySelector('#loginScreen');
  const createUserScreen = document.querySelector('#createUserScreen');
  loginScreen.style.display = 'inline';
  createUserScreen.style.display = 'none';
}


function createNewNote(title, content) {

}


function backToNotes() {

}


function newNoteScreen() {

}


function logMeOut() {

}