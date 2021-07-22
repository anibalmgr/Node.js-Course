const fs = require('fs')
const chalk =  require('chalk');

function getNotes(){
    return "your notes..."
}

const addNotes =  function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note with the title: " + title + " added"))
    } else {
        console.log(chalk.red.inverse("Note title taken, please choose a different title."))
    }
}

const removeNotes = function (title) {
    const notes = loadNotes()
    const newNotes = notes.filter(function (note) {
        return note.title !== title
    }
    )
    
    if (notes.length !== newNotes.length) {
        saveNotes(newNotes)
        console.log(chalk.green.inverse("Note titled: " + title + " has been removed."))
    } else {
        console.log(chalk.red.inverse("No note titled: " + title + " found."))
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}