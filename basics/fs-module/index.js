const fs = require("fs");

// Creates a new file and if data is present then it overwrite it
fs.writeFileSync("new.txt", "data entered");
// fs.writeFileSync("new.txt", "other data entered");

// Appends data to existing file or create file with data if not present
fs.appendFileSync("n.txt", "data appended");

// Read data from file
const data = fs.readFileSync("new.txt");
// console.log(data);
// <Buffer 6f 74 68 65 72 20 64 61 74 61 20 65 6e 74 65 72 65 64 64 61 74 61 20 61 70 70 65 6e 64 65 64>
// const bufferData = fs.readFileSync("new.txt");
const originalData = bufferData.toString();
console.log(originalData);

// Rename a file
fs.renameSync("new.txt", "readWrite.txt");
