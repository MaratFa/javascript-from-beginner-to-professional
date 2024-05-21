/*
    -- Description--

  Use the arrow format to create functions that output the values one and two to the
  console. Create a third function that outputs the value three to the console, and then
  invokes the first two functions.
  
  Create a fourth function that outputs the word four to the console and also use
  setTimeout() to invoke the first function immediately and then the third function.
  
  What does your output look like in the console? Try to get the console to output:
    Four
    Three
    One
    Two
    One

*/

let function1 = () => console.log("One");
let function2 = () => console.log("Two");
let function3 = () => {
  console.log("Three");
  function1();
  function2();
};

let function4 = () => {
  console.log("Four");
  setTimeout(function1);
  function3();
};

function4();
