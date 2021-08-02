const Tokens = {
  INVAL: "invalid_token",
  IDENT: "identifier", // >a< = 1
  EQUAL: "equality", // a >=< 1 or a >is< 1
  ARITH: {
    ADD: "+",
    SUB: "-",
    MUL: "*",
    DIV: "/"
  },
  NUM: "number", // a = >1< 
  STATEMENT: {
    SHOW: "show",
  },
}

class Lexer {
  constructor(code, args) {
    this.code = code;

    let delimeters = [' ','\t'];
    this.code = this.split(this.code, delimeters);
  }

  split(code, delimeters) {
    let newCode = code.split("\n");
    newCode.forEach((line,linenum) => {
      let temp;
      delimeters.forEach((item, i) => {
        console.log(temp);
        if(i==0) {
          temp = line.split(item);
          return;
        }
        temp = temp.split(item);
      });
      newCode[linenum] = temp;
    });
    return newCode;
  }

  toString() {
    return JSON.stringify(this.code);
  }
}
const lex = (code, args) => new Lexer(code, args);

module.exports = lex;
