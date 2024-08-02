const fs = require("fs");

// fs.writeFile("async.txt", "Async data", (err) => {
//   console.log("file is created successfully");
//   console.log(err);
// });

fs.readFile("async.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("After async data");
