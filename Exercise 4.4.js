/*    
    In this exercise, we'll create a Magic 8-Ball random answer generator:
    
    1. Start by setting a variable that gets a random value assigned to it. The value
       is assigned by generating a random number 0-5, for 6 possible results. You
       can increase this number as you add more results.
    2. Create a prompt that can get a string value input from a user that you can
       repeat back in the final output.
    3. Create 6 responses using the switch statement, each assigned to a different
       value from the random number generator.
    4. Create a variable to hold the end response, which should be a sentence
       printed for the user. You can assign different string values for each case,
       assigning new values depending on the results from the random value.
    5. Output the user's original question, plus the randomly selected case
       response, to the console after the user enters their question.
*/

let answer;

switch(Math.floor(Math.random() * 6)) {
    case 0:
        answer = "Answer 1";
        break;
    case 1:
        answer = "Answer 2";
        break;
    case 2:
        answer = "Answer 3";
        break;
    case 3:
        answer = "Answer 4";
        break;
    case 4:
        answer = "Answer 5";
        break;
    case 5:
        answer = "Answer 6";
        break;
}

console.log(prompt("Please enter your question to get a random answer") + " - " + answer)