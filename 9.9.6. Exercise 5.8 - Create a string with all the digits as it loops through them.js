/*
    -- Description--

    1. Set up a string variable to use as output.
    2. Select a number to skip, and set that number as a variable.
    3. Create a for loop that counts to 10.
    4. Add a condition to check if the value of the looped variable is equal to the
       number that should be skipped.
    5. If the number is to be skipped in the condition, continue to the next number.
    6. As you iterate through the values, append the new count value to the end of
       the main output variable.
    7. Output the main variable after the loop completes.
    8. Reuse the code, but change the continue to break and see the difference. It 
       should now stop at the skip value.

*/



/* 1-7 */
let output = "";
let numberToSkip = 2;

for (let i = 0; i < 10; i++) {
  if (i === numberToSkip) {
    continue;
  } else {
    output += i;
  }
  console.log(output);
}

/* 8 */
let output = "";
let numberToSkip = 2;

for (let i = 0; i < 10; i++) {
  if (i === numberToSkip) {
    break;
  } else {
    output += i;
  }
  console.log(output);
}
