import { exit } from "process";

export default class Debugger {
  static enabled = false;
  section: string;

  constructor(section?: string) {
    this.section = section ?? "Debug";
  }

  log(msg: string, sec?: string): void {
    if (Debugger.enabled) {
      sec = sec ?? this.section;
      console.error(` #${sec}:\t${msg}`);
    }
  }
  error(msg: string): void {
    let header = "";
    if (Debugger.enabled) {
      header = ` #${this.section}:\t`;
    }
    console.error("\x1b[31m%s\x1b[0m", header + msg.toString());
    exit(1);
  }

  static enable(): void {
    Debugger.enabled = true;
    let debug = new Debugger("Debugger");
    debug.log("debug enabled");
  }
}
