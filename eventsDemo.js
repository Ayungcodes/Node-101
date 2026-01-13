import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log(`Hello ${name}, welcome back!`);
}

function goodbyeHandler(name) {
  console.log(`Goodbye ${name}, have a good time!`);
}

// register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// emit events
myEmitter.emit("greet", "Liam");
myEmitter.emit("goodbye", "Liam");

// error handling
myEmitter.on("error", (err) => {
  console.log("An error occurred:", err);
});

// simulate error
myEmitter.emit("error", new Error("Something went wrong"));
