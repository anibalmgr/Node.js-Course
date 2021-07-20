const chalk =  require('chalk');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const getNotes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    // showInHelp: true,
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log("Title: ", argv.title)
        console.log("Body: ", argv.body)
    }
}).command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log("Removing a note")
    }
}).command({
    command: 'list',
    describe: 'List the commands',
    handler: function () {
        console.log("Listing the commands")
    }
}).command({
    command: 'read',
    describe: 'Read the commands',
    handler: function () {
        console.log("Reading the commands")
    }
})

yargs.parse()