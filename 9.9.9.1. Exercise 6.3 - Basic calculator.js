// 1. Set up two variables containing number values:

let variable1 = 3;
let variable2 = 6;

// 2. Set up a variable to hold an operator, either + or -:

let operator = "-";

/* 3. Create a function that retrieves the two values and the operator string value
within its parameters. Use those values with a condition to check if the
operator is + or -, and add or subtract the values accordingly (remember if
not presented with a valid operator, the function should default to addition): */

function calculator(variable1, operator, variable2) {
  if (operator == "-") {
    return variable1 - variable2;
  } else {
    return variable1 + variable2;
  }
}

// 4. Within console.log(), call the function using your variables and output the response to the console:

console.log(calculator(variable1, operator, variable2));

// 5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments:

variable1 = 6;
variable2 = 5;
operator = "oo";

console.log(calculator(variable1, operator, variable2));
