const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// change file place
fs.rename("./assets/notes.md", "./storage-files/notes.md", (err) => {
  if (err) {
    throw err;
  }
});

setTimeout(() => {
  // remove file
  fs.unlinkSync("./assets/alex.jpg");
}, 4000);
