import { Command } from "commander";
import Debugger from "./debugger.js";
import fileLoader from "./file_loader.js";
import Lexer from "./lexer.js";

const program = new Command();
program
  .version("0.0.1")
  .argument("<file>", "file to run")
  .option("-d, --debug", "output extra debugging")
  .option("-e, --emitter <value>", "the emitter that is used", "c++")
  .parse(process.argv);

if (program.opts().debug) Debugger.enable();

const debug = new Debugger("Main Process");

debug.log("CLI Options:" + JSON.stringify(program.opts()));

const filePath = program.args[0];

let code: string = (await fileLoader(filePath)) ?? "";

let lexed = Lexer.start(code);
