const fs = require("fs");

const bioData = {
  name: "ABC",
  age: 22,
  hobby: "cricket",
};

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// fs.writeFile("newJson.json", jsonData, (err) => {
//   console.log("json file created done");
// });

fs.readFile("newJson.json", "utf-8", (err, data) => {
  const originalData = JSON.parse(data);
  console.log("Original Data: ", originalData);
  console.log("JSON data: ", data);
});
