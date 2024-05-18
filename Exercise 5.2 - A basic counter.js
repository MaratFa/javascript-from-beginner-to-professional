/*
    -- Description--
   
    In this exercise, we will create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit.

    1. Set the starting counter to 0.
    2. Create a variable, step, to increase your counter by.
    3. Add a do while loop, printing the counter to the console and incrementing it by the step amount each loop.
    4. Continue to loop until the counter is equal to 100 or more than 100.

*/

let i = 0;
let step = 2;
do {
    console.log(i);
    i += step;
} while (i <= 100);