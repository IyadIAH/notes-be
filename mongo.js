require('dotenv').config()
const mongoose = require('mongoose')

const url = 'mongodb+srv://iyadhmidat:CbfKKlUcix8abPz9@fullstack.071t46g.mongodb.net/testNoteApp?retryWrites=true&w=majority&appName=Fullstack'

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'SUPERTEST Test',
  important: true,
})

note.save().then(result => {
    console.log(`${note} is saved`)
    mongoose.connection.close()
})

// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close
// })
