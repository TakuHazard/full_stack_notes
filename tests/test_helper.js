const Note = require('../models/note')

const initialNotes = [
    {
        content : 'HTML is easy',
        important : false
    },
    {
        content : 'Browser can execute only Javascript',
        important : true
    }
]

const nonExistingId = async () => {
    const note = new Note( { content : 'willremovesthissoon' } )
    await note.save()
    await note.remove()

    return note._id.toString()
}

const notesInDb = async () => {
    const notes = await Note.find({})
    let toBeReturned = notes.map(note => note.toJSON())
    return toBeReturned
}

module.exports = {
    initialNotes, nonExistingId, notesInDb
}