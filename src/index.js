//Get dependencies
const fs = require("fs");
const path = require("path");

//Get Lexer & Parser classes
const Lexer = require("./lexer");
const Parser = require("./parser");

//File retrieval
const file = path.join(__dirname, "./testing.npl");

let code = "";

console.log("getting files...");
try {
  code = fs.readFileSync(file).toString();
  console.log("got files!");
} catch (e) {
  // console.error(`No file or directory: ${file}`);
  throw new Error(`No file: ${file}`);
}

//Lexing
console.log("Lexing...");
let lexedCode = Lexer(code);
console.log("Lexed!");

//print code with lexed code
console.log(`${code}\n\n===\n\n${lexedCode.toString()}`);
