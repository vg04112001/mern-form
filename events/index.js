const EventEmitter = require("events");

const event = new EventEmitter();

event.on("hello", () => {
  console.log("welcome to event listener");
});
event.on("hello", () => {
  console.log("other");
});
event.on("hello", () => {
  console.log("12345");
});

event.emit("hello");

// it's like function define
event.on("check", (statusCode, message) => {
  console.log(`Status Code:- ${statusCode} Message:- ${message}`);
});

// it's like function call
event.emit("check", 200, "ok");
