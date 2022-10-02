/*    
    1. Create a variable called prize and use a prompt to ask the user to set the
    value by selecting a number between 0 and 10.
    2. Convert the prompt response to a number data type.
    3. Create a variable to use for the output message containing the value "My
    Selection: ".
    4. Using the switch statement (and creativity), provide a response back
    regarding a prize that is awarded depending on what number is selected.
    5. Use the switch break to add combined results for prizes.
    6. Output the message back to the user by concatenating your prize variable
    strings and the output message string.
*/

let prize = Number(prompt("Please enter a number between 0 and 10."));
let message = "My Selection: " + prize + " and my award is ";
switch(prize){
    case 0:
        message += "'Award A'"
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        message += "'Award B'"
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        message += "'Award C'";
        break;
    default:
        message = "Please enter a number between 0 and 10.";
}
console.log(message)