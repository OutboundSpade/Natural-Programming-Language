const fs = require('fs');
const path = require('path');

const Program = require('./output');
const Lexer = require('./lexer');

const file = path.join(__dirname,"./testing.npl");

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
    o.complete();
  },
  "Lexer": (o) => {
    o.next(file);
    let lexedCode = Lexer(code);
    console.log(`${code}\n\n===\n\n${lexedCode.toString()}`);
    o.complete();
  }
});

Program.start();