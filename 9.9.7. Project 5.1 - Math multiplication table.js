/*
    -- Description--

    1. Set up a blank array to contain the final multiplication table.
    2. Set a value variable to specify how many values you want to multiply with
       one another and show the results for.
    3. Create an outer for loop to iterate through each row and a temp array to store
       the row values. Each row will be an array of cells that will be nested into the
       final table.
    4. Add an inner for loop for the column values, which will push the multiplied
       row and column values to the temp array.
    5. Add the temporary row data that contains the calculated solutions to the
       main array of the final table. The final result will add a row of values for the
       calculations.

*/

let finalTable = [];
let rows = 10;
let columns = 10;

for (let i = 0; i < rows; i++) {
  let tempArray = [];
  for (let j = 0; j < columns; j++) {
    tempArray.push(i * j);
  }
  finalTable.push(tempArray);
}

console.table(finalTable);

