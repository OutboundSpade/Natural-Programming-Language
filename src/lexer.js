const tokens = {
  
}

class Lexer {
  constructor(code, args) {
    if (args === undefined) {
      this.args = { // Default args
      }
    }else {
      this.args = args;
    }
    this.code = code;
  }
  
  toString() {
    return "Yoyo!";
  }
}
const lex = (code, args) => new Lexer(code, args);

module.exports = lex;
