/*
    --Friend checker game--
    
    1. Ask the user to enter a name,
    2. using the switch statement to return a confirmation that the user is a friend if the name selected is
    known in the case statements. You can add a default response that you don't know the person if it's an unknown name.
    3. Output the result into the console
  
*/

let name = prompt("Please enter your name.");
switch (name) {
    case "Alex":
        console.log("You are my friend!");
        break;
    case "Bob":
        console.log("You are my friend!");
        break;
    case "Jon":
        console.log("You are my friend!");
        break;
    default:
        console.log("Sorry, I don't know you.")    
}