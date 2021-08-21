import Debugger from "./debugger.js";
const debug = new Debugger("Lexer");

enum Token {
  //Arithmetic
  ADD,
  SUB,
  DIV,
  MUL,
  //Different meanings of =
  EQUAL,
  ASSIGNMENT,
  EQUALITY,
  //Special tokens
  IF,
  THEN,
  ELSE,
  END,
  END_TYPE,
  //Repeat tokens
  REPEAT,
  TIMES,
  WHILE,
  UNTIL,
}

export default class Lexer {
  static Token = Token;

  static start(code: string) {
    let lexed: string[];
    for (let line of code.split("\n")) {
    }
  }
  private getCommandType(line: string) {}
}
