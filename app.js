const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");
const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing the note");
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function() {
    console.log("Listing out all notes");
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note");
  }
});

console.log(yargs.argv);

// if (command === "add") {
//     console.log("Adding operation selected");
//     if (argv.title>0){console.log(object);}
// } else if (command === "sub") {
//   console.log("Subtracting operation selected");
// } else {
//   console.log("Invalid command");
// }
// console.log(title);
