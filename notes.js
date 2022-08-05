const fs = require('fs')
const chalk = require('chalk');

const addNote = (title, body) => {

    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    
    debugger
    
    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen('Note added successfully'));

    }
    else {
        console.log(chalk.bgRed('Note with same title already exists, try another title name'));
    }
}


const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => {
        return note.title != title;
    });
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen("Note removed successfully"));
    }
    else {
        console.log(chalk.bgRed("No note found with this title"));
    }
};

const findNote = (title) =>{

    const notes = loadNotes();

    const foundNote = notes.find((note) => {
        return note.title === title;
    });

    if(foundNote){
        console.log((chalk.bgBlue(foundNote.title)));
        console.log((chalk.blue(foundNote.body)));
    }
    else{
        console.log(chalk.bgRed("No note found with this title"));
    }

};


const listNotes = () => {
    const notes = loadNotes();
    if(notes.length !== 0){
        console.log(chalk.bgBlue("Your notes:"));
        notes.forEach((note) => {

            console.log(chalk.blue(note.title));
    
        });
    }
    else console.log(chalk.bgRed("You have no notes"));
  
};

const getNotes = () => {
    return [
        {
            id: 1,
            name: "Today Note",
            content: "Content of first note"
        },
        {
            id: 2,
            name: "Tomorrow Note",
            content: "Content of second note"
        }
    ]
}





const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const notes = JSON.parse(dataBuffer.toString());
        return notes;
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports = { addNote, removeNote, findNote, listNotes, getNotes }