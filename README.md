# notes-app

Notes app built with `Node.js`

## Installation

Install project dependencies

```JavaScript
npm install
```

## Running the app

* To add a new note, choose add command providing title and body of note to be added
* Open `notes.json` file to check your notes

```JavaScript
node app.js add --title="Your note title" --body="Your note body"
```

* To remove a note, choose remove command providing title of the note to be removed

```JavaScript
node app.js add --title="Your note title"
```

* To search for a note, choose find command providing title of the note to be found

```JavaScript
node app.js find --title="Your note title"
```

* To list all notes, choose list command

```JavaScript
node app.js list
```
