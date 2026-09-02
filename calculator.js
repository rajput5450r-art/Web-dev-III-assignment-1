const args = process.argv;
const operation = args[2];
const num1 = Number(args[3]);
const num2 = Number(args[4]);

let result;


// if (operation === "add") result = num1 + num2;
// else if (operation === "subtract") result = num1 - num2;
// else if (operation === "multiply") result = num1 * num2;
// else if (operation === "divide") result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
// else result = "Invalid operation";

switch (operation) {
    case "add":
        result = num1 + num2;
        break
    case "subtract":
        result = num1 - num2;   
        break     
    case "multiply":
        result = num1 * num2;
        break
    case "divide":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
        break
    
    default:
        result = "Invalid Operator"

}

console.log("Result:", result);