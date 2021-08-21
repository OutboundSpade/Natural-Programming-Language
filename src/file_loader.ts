import { promisify } from "util";
import { stat, readFileSync } from "fs";
import Debugger from "./debugger.js";
import { ENOENT } from "constants";

export default async (filePath: string) => {
  const statPromise = promisify(stat);

  let debug = new Debugger("File Loader");
  return statPromise(filePath)
    .then((i) => {
      debug.log("path exists");

      if (!i.isFile()) {
        throw new Error("A file must be specified!");
      }
      debug.log("is a valid file");

      if (filePath.slice(-4) != ".npl") {
        throw new Error('The file must end in ".npl"!');
      }
      debug.log("ends in .npl");

      let code = readFileSync(filePath).toString();
      debug.log("Code loaded!");
      return code;
    })
    .catch((err) => {
      let additionalNotes = "";
      if (err.errno == undefined) {
        additionalNotes = " (Likely a custom error)";
      }
      debug.log(JSON.stringify(err) + additionalNotes, "Error Raw");
      switch (-err.errno) {
        case ENOENT:
          err = new Error("The file doesn't exist!");
          break;
        case 13: //EACCES
          err = new Error("You don't have permissions to access that file!");
          break;
      }
      debug.error(err);
    });
};
