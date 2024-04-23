#! /usr/bin/env node
import inqurirer from "inquirer";

const answer = await inqurirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subraction", "Multipilication", "Division"],
  },
]);
console.log(answer);
if (answer.operator === "Addition"){
  console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subraction"){
  console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multipilication"){
  console.log(answer.firstNumber * answer.secondNumber);
} 
else if (answer.operator === "Division"){
  console.log(answer.firstNumber / answer.secondNumber);
}
else{
  console.log("Please select valid operator")
}
