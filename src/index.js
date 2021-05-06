const Listr = require("listr");

const { Observable } = require("rxjs");

const tasks = new Listr([
  {
    title: "Success",
    task: () => {
      return new Observable((observer) => {
        observer.next("Foo");

        setTimeout(() => {
          observer.next("Bar");
        }, 2000);

        setTimeout(() => {
          observer.error();
        }, 4000);
      });
    },
  },
  {
    title: "Failure",
    task: () => Promise.reject(new Error("Bar2")),
  },
]);

tasks.run().catch((e) => {
  // console.log(e);
});
