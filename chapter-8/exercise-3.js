/*  
Using the array map() method, update an array's contents. Take the following steps:
*/


// 1. Create an array of numbers:

const array1 = [1, 2, 3, 4, 5];

/* 2. Using the array map method and an anonymous function, return an updated
array, multiplying all the numbers in the array by 2. Output the result into
the console: */

const array2 = array1.map(function (currentValue) {
  return currentValue * 2;
});

console.log(array2);

/* 3. As an alternative method, use the arrow function format to multiply each
element of the array by 2 with the array map() method in one line of code: */

const array3 = array1.map((currentValue) => currentValue * 2);

// 4. Log the result onto the console:

console.log(array3);
