const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions-modules.js"]);

questionApp.stdin.write("Gi \n");
questionApp.stdin.write("Vln \n");
questionApp.stdin.write("work \n");

questionApp.stdout.on("data", (data) => {
  console.log(`from the question app: ${data}`);
});

questionApp.stdout.on("close", () => {
  console.log(`questionApp process exited`);
});
