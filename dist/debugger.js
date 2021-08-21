import { exit } from "process";
export default class Debugger {
    constructor(section) {
        this.section = section !== null && section !== void 0 ? section : "Debug";
    }
    log(msg, sec) {
        if (Debugger.enabled) {
            sec = sec !== null && sec !== void 0 ? sec : this.section;
            console.error(` #${sec}:\t${msg}`);
        }
    }
    error(msg) {
        let header = "";
        if (Debugger.enabled) {
            header = ` #${this.section}:\t`;
        }
        console.error("\x1b[31m%s\x1b[0m", header + msg.toString());
        exit(1);
    }
    static enable() {
        Debugger.enabled = true;
        let debug = new Debugger("Debugger");
        debug.log("debug enabled");
    }
}
Debugger.enabled = false;
