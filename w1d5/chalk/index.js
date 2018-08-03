var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var message1 = chalk.bgCyan("Cyan Background");
var message2 = chalk.dim("dim");
console.log(message);
console.log(message1);
console.log(message2);