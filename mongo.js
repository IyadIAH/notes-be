const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as an argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://iyadhmidat:${password}@fullstack.071t46g.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Fullstack`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'Mongoose makes it easy',
    important: true,
})

// note.save().then(result => {
//     console.log(`${note} is saved`)
//     mongoose.connection.close()
// })

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close
})
