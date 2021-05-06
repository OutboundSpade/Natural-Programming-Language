const fs = require('fs');
const path = require('path');

const Program = require('./output');
const Lexer = require('./lexer');

const file = path.join(__dirname,"../examples/just_vars.npl");

let code = "";
Program.Tasks({
  "Get Files": (o) => {
    o.next(file);
    try {
      code = fs.readFileSync(file).toString();
    } catch(e) {
      // console.error(`No file or directory: ${file}`);
      o.error(new Error(`No file: ${file}`));
    }
    setTimeout(() => {
    o.complete();
    },2000);
  },
  "Lexer": (o) => {
    o.next(file);
    let tokenFile = Lexer(code);
    console.log(`${code}\n\n===\n\n${tokenFile.toString()}`);
    o.complete();
  }
});

Program.start();