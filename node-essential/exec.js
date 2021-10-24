const cp = require("child_process");

//execute external system commands
cp.exec("node readStream", (err, data, stderr) => {
  // if (err) {
  //   throw err;
  // }
  console.log(data);
  //console.log(stderr);
});
