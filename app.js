const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");

console.log(getNotes());
console.log(chalk.green("viv@com"));
console.log(chalk.blue.bgRed.bold("Vivienne"));
