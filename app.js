const isEven = require("./modules/iseven");
const logger = require("./modules/logger");
const args = process.argv

n = Number(args[2])

logger.log("Checking numbers...");

console.log(n, "is even?", isEven(n));