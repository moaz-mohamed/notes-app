const fs = require('fs')
const chalk = require('chalk');

const addNote =  (title, body) => {

    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    
    if (duplicateNote == undefined) {
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


const removeNote =  (title) => {
    const notes = loadNotes();


    const filteredNotes = notes.filter((note) => {
        return note.title != title;
    });
    if (filteredNotes.length < notes.length) {
        saveNotes(filteredNotes);
        console.log(chalk.bgGreen("Note removed successfully"));
    }
    else {
        console.log(chalk.bgRed("No title found with provided title"));
    }

};

const getNotes =  () => {
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

module.exports = { addNote, removeNote, getNotes }