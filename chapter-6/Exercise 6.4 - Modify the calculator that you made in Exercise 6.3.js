// 1. Set up an empty array to store the values that will be calculated within the loop:

const arr = [];

/* 3. Create a function that returns the value of the two parameters passed into
the function when it is called. Add the values together, returning the result: */

function addition(param1, param2) {
  return param1 + param2;
}

/* 2. Create a loop that runs 10 times, incrementing by 1 each time, creating two values
each iteration. For the first value, multiply the value of the loop count by 5. For
the second value, multiply the value of the loop counter by itself: */

for (i = 0; i < 10; i++) {
  let val1 = i * 5;
  let val2 = i * i;

  /* 4. Within the loop, call the calculation function, passing in the two values as
  arguments into the function and storing the returned result in a response variable: */

  let result = addition(val1, val2);

  // 5. Still within the loop, push the result values into the array as it iterates through the loop:

  arr.push(result);
}

// 6. After the loop is complete, output the value of the array into the console:

console.log(arr);

// 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console:
