const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const path = require('path');


const PORT = 3000;


mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
  );
  
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.static(path.join(__dirname, '../client')))


// const notesController = require('./notesController');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notesRouter = express.Router();
app.use('/notes', notesRouter);

// create a new note
// http://localhost:3000/note
// notesRouter.post('/', notesController.createNote);

// display an existing note
// http://localhost:3000/notes/"title"
// notesRouter.get('/:title', notesController.readNote);

// update a note
// http://localhost:3000/notes/"title"
// notesRouter.patch('/:title', notesController.updateNote);
// 
// delete a note
// http://localhost:3000/notes/"title"
// notesRouter.delete('/:title', notesController.deleteNote);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));