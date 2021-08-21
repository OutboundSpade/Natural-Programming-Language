import Debugger from "./debugger.js";
const debug = new Debugger("Lexer");
var Token;
(function (Token) {
    //Arithmetic
    Token[Token["ADD"] = 0] = "ADD";
    Token[Token["SUB"] = 1] = "SUB";
    Token[Token["DIV"] = 2] = "DIV";
    Token[Token["MUL"] = 3] = "MUL";
    //Different meanings of =
    Token[Token["EQUAL"] = 4] = "EQUAL";
    Token[Token["ASSIGNMENT"] = 5] = "ASSIGNMENT";
    Token[Token["EQUALITY"] = 6] = "EQUALITY";
    //Special tokens
    Token[Token["IF"] = 7] = "IF";
    Token[Token["THEN"] = 8] = "THEN";
    Token[Token["END"] = 9] = "END";
    Token[Token["END_TYPE"] = 10] = "END_TYPE";
})(Token || (Token = {}));
export default class Lexer {
    static start(c) {
        debug.log("Code: " + JSON.stringify(c));
    }
}
Lexer.Token = Token;
