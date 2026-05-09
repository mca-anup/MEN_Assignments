console.log("Start");

process.nextTick(() => {
  console.log("NextTick callback");
});

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");
