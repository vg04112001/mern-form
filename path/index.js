const path = require("path");

// console.log(path.parse("C:/Users/PC/Desktop/NodeJs/path/index.js"));

// console.log(
//   path.format({
//     root: "/ignored",
//     dir: "/home/user/dir",
//     base: "file.txt",
//   })
// );

console.log(path.basename("C:/Users/PC/Desktop/NodeJs/path/index.js"));
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));
