// console.log("starting app ....")

const yargs = require("yargs")
const notes = require("./notes");
const args = yargs.argv;

var title = yargs.argv.title
var body = yargs.argv.body
var command = yargs.argv._[0]

if (command === "add") {
    console.log("adding note")
    notes.addingNote(title, body)
} else if (command === "remove") {
    console.log("removing note")
    notes.removeNote(title)
} else if  (command === "read") {
    console.log("reading note")
    notes.readNote(title)
} else if (command === "list") {
    console.log("listing all notes")
    notes.getAll()
} else {
    console.log("unknown command was used!")
}

// var title = process.argv[6]
// console.log('process', process.argv)
// console.log('yargs', yargs.argv)

// console.log(title)













// node modules
// internal 
// external
// Third Party 

// fs.appendFile(path, data[, options], callback)
// fs.appendFileSync("hello.txt", "hello world")


// console.log(notes.add(75,25))