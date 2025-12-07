/* Create a faulty calculator using JavaScript

This faulty calculator does the following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the time
*/

let random = Math.random();
console.log("Random value = ", random);

let num1 = Number(prompt("Enter the first number: "));
let operation = prompt("Enter the operation (+, -, *, /): ");
let num2 = Number(prompt("Enter the second number: "));

let faultyCalc = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  console.log(`Performing correct operation: ${num1} ${operation} ${num2}`);
  alert(`Result: ${eval(`${num1} ${operation} ${num2}`)}`);
} else {
  let wrongOp = faultyCalc[operation];
  console.log(`Performing WRONG operation: ${num1} ${wrongOp} ${num2}`);
  alert(`Result: ${eval(`${num1} ${wrongOp} ${num2}`)}`);
}
