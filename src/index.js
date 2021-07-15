const fs = require("fs");
const path = require("path");

const Lexer = require("./lexer");

const file = path.join(__dirname, "./testings.npl");

let code = "";

console.log("getting files...");
try {
  code = fs.readFileSync(file).toString();
  console.log("got files!");
} catch (e) {
  // console.error(`No file or directory: ${file}`);
  throw new Error(`No file: ${file}`);
}
console.log("Lexing...");
let lexedCode = Lexer(code);
console.log("Lexed!");
console.log(`${code}\n\n===\n\n${lexedCode.toString()}`);
