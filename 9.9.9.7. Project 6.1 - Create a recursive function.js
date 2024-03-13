/*
  -- Description--

  Create a recursive function that counts up to 10. Invoke the function with different
  start numbers as the arguments that are passed into the function. The function
  should run until the value is greater than 10.

*/

const counter = (val) => {
  if (val <= 10) {
    console.log(val);
    val++;
    counter(val);
  }
};

counter(5);

counter(7);
