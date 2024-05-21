/*    
    1. Create a prompt to ask the user's age
    2. Convert the response from the prompt to a number
    3. Declare a message variable that you will use to hold the console message for
    the user
    4. If the input age is equal to or greater than 21, set the message variable to
    confirm entry to a venue and the ability to purchase alcohol
    5. If the input age is equal to or greater than 19, set the message variable to
    confirm entry to the venue but deny the purchase of alcohol
    6. Provide a default else statement to set the message variable to deny entry if
    none are true
    7. Output the response message variable to the console
*/

let userAge = Number(window.prompt("How old are you?"));
let message;
if (userAge >= 21) {
    message = "You can enter the venue and buy alcohol";
} else if (userAge >= 19) {
    message = "You can enter the venue but you are not allowed to buy an alcohol";
} else {
    message = "You are not allowed to enter the venue";
}
console.log(message)