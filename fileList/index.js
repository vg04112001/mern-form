const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files");
console.log(dirPath);

// for (i = 0; i < 8; i++) {
//   fs.writeFileSync(`${dirPath}/hello${i}.txt`, "simple text file data");
// }

fs.readdir(dirPath, (err, data) => {
  // console.log(data);
  // data.forEach((item) => {
  //   console.log(item);
  // });
});
