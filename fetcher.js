const fs = require("fs");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const args = process.argv.slice(2);
const URL = args[0];
const PATH = args[1];

const request = require("request");

request(URL, (error, response, body) => {
  fs.writeFile(PATH, body, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${PATH}`);
  });
});
