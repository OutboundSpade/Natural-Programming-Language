const Tokens = {
  INVAL: "invalid_token",
  IDENT: "identifier", // >a< = 1
  ASSIGN: "assignment", // a >=< 1 or a >is< 1
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
    this.Tokens = Tokens;
    if (args === undefined) {
      this.args = { // Default args
      }
    } else {
      this.args = args;
    }
    this.code = code;

    this.codeLines = this.code.split('\n');
    this.lexed = [];
    this.codeLines.forEach((line, i) => {
      this.lexed.push(this.codeToLex(line, i));
    });

  }

  codeToLex(line, lineNum) {
    this.cLine = line;
    this.cLineNum = lineNum;
    let out = [];
    let jmp = 1;
    for(let i=0;i<line.length;i+=jmp) {
      let token = this.getToken(line[i], i);
      // console.log(JSON.stringify(token));
      jmp = token.skip;
      if(token.type !== undefined) {
        out.push(token.type + ` at ${lineNum},${token.index} value: ${token.value}\n`);
      }
    }
    return out;
  }

  getToken(char, i) {
    switch(char) {
      case '+':
        return {type: Tokens.ARITH.ADD, value: char, index: i, skip: 1};
      case '-':
        return {type: Tokens.ARITH.SUB, value: char, index: i, skip: 1};
      case '=':
        return {type: Tokens.ASSIGN, value: char, index: i, skip: 1};
      case ' ':
        return {index: i, value: char, skip: 1};
      case 'i':
        if(this.lookAhead(i,1,this.cLine) === 's')
          return {type: Tokens.ASSIGN, value: char+this.lookAhead(i,1,this.cLine), index: i, skip: 2};
    }
    // if(this.isNumeric(char))

    return {type: Tokens.INVAL, value: char, index: i, skip: 1};
  }

  lookAhead(index, len, line) {
    let t = "";
    index++;
    for(let i=index;i<index+len&&i<line.length;i++) {
      t += line[i];
    }
    return t;
  }
  
  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && !isNaN(parseFloat(str))
  }


  toString() {
    let keyed = [];
    for(let i of this.lexed) {
      keyed.push(this.getKeyByValue(Tokens,i));
    }
    return this.lexed.join('\n');
  }
}
const lex = (code, args) => new Lexer(code, args);

module.exports = lex;
