// 1. Create a function that contains a condition within it checking if the argument value is 0:

function recursion(val) {
  console.log(val);

  if (val == 0) {
    return 1;

    /* 2. If the parameter is equal to 0, it should return the value of 1. Otherwise, it should
    return the value of the argument multiplied by the value returned from the function itself,
    subtracting one from the value of the argument that is provided. This will result in running
    the block of code until the value reaches 0: */
    
  } else {
    let result = val * recursion(val - 1);
    console.log(result);
    return result;
  }
}

/* 3. Invoke the function, providing an argument of whatever number you want to find
the factorial of. The code should run whatever number is passed initially into the function,
decreasing all the way to 0 and outputting the results of the calculation to the console. It
could also contain a console.log() call to print the current value of the argument in
the function as it gets invoked: */

recursion(4);

// 4. Change and update the number to see how it affects the results:

recursion(7);
