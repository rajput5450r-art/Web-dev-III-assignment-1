const crypto = require("crypto");

function rollDice() {
  return crypto.randomInt(1, 7);
}

const count = 0;

for (let i = 0; i < 5; i++) {
    console.log("Dice Rolled:", rollDice());
}