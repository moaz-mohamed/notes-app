const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const { argv } = require('yargs');



// Modifying yargs version
yargs.version('2.0.0');

// Add a new note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        notes.addNote(argv.title, argv.body);
    }

});

// Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }

    },
    handler: () => {
        notes.removeNote(argv.title);

    }
});


// Search for a note
yargs.command({
    command: 'find',
    describe: 'Find a note',
    builder: {
        title: {
            describe: 'Title of note to be found',
            demandOption: true,
            type: 'string'
        }

    },
    handler: () => {
        notes.findNote(argv.title);

    }
});

// List all notes
yargs.command({

    command: "list",
    describe: "List notes",
    handler: () => {
        notes.listNotes();
    }
});


// Read note
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: () => {
        console.log("Reading a note");
    }
});

console.log(yargs.parse());


//console.log(argv);