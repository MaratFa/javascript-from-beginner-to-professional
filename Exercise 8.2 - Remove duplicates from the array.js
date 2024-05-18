/*  
Remove duplicates from the array using filter() and indexOf().
The starting array is:

["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
"Laurence", "Mike", "Laurence", "Mike"]

Using the array filter() method, this will create a new array using the elements that
pass the test condition implemented by the function. The final result will be:

[ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]
*/



/* 1. Create an array of names of people. Make sure you include duplicates. The
exercise will remove the duplicate names: */

let array = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];

/* 2. Using the filter() method, assign the results of each item from the array as
arguments within an anonymous function. Using the value, index, and array
arguments, return the filtered result. You can set the return value to true
temporarily as this will build the new array with all the results in the original
array: */

array = array.filter((currentValue, index, arr) => {

  /* 3. Add a console.log call within the function that will output the index value
    of the current item in the array. Also add the value so you can see the results
    of the item value that has the current index number and the first matching
    result from the array's index value: */

  console.log(index, currentValue, array.indexOf(currentValue));

  /* 4. Using indexOf() the current value returns the index value of the item
  and applies the condition to check to see if it matches the original index
  value. This condition will only be true on the first result so all subsequent
  duplicates will be false and not get added to the new array. false will not
  return the value into the new array. The duplicates will all be false since the
  indexof() only gets the first match in the array: */

  return arr.indexOf(currentValue) === index;
});

/* 5. Output the new, unique value array onto the console: */

console.log(array);
