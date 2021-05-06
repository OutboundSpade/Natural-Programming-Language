const Listr = require("listr");
const { Observable } = require("rxjs");

let TasksObj = {};
const start = () => {
  let jobArr = [];
  for (let task of Object.keys(TasksObj)) {
    jobArr.push({
      title: task,
      task: () => {
        return new Observable((o) => TasksObj[task](o));
      }
    });
  }
  const listr = new Listr(jobArr);

  listr.run().catch((e) => {
    // console.log(e);
  });
}

const Tasks = (t) => {
  TasksObj = t;
}
module.exports = { Tasks, start };