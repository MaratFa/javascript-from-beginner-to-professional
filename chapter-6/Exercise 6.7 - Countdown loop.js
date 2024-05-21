// 1. Set the start variable at a value of 10, which will be used as the starting value for the loop:

let val = 10;

// 2. Create a function that takes one argument, which is the countdown value:

function countdownLoop(arg) {
    
    // 3. Within the function, output the current value of the countdown into the console:

    console.log(arg);
    
    // 4. Add a condition to check if the value is less than 1; if it is, then return the function:
    
    if (arg < 1) {
        return; 
    }
    
    /* 5. Add a condition to check if the value of the countdown is not less than 1, then continue
    to loop by calling the function within itself: */
    
    else {

        /* 6. Make sure you add a decrement operator on the countdown so the preceding condition
        eventually will be true to end the loop. Every time it loops, the value will decrease
        until it reaches 0: */
    
        countdownLoop(arg - 1);
    }   
    
    console.log(arg);
}

countdownLoop(val);