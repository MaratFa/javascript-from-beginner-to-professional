/*
    1. Create an object named people that contains an empty array that is called friends.
    2. Create three variables, each containing an object, that contain one of your 
       friend's first names, last names, and an ID value.
    3. Add the three friends to the friend array.
    4. Output it to the console.
*/

let people = {
    friends: []
}
let firstFriend = {
    firstName: "Larry",
    lastName: "Page",
    id: 1
}
let secondFriend = {
    firstName: "Bill",
    lastName: "Gates",
    id: 2
}
let thirdFriend = {
    firstName: "Mark",
    lastName: "Zuckerberg",
    id: 3
}
people.friends.push(firstFriend, secondFriend, thirdFriend);
console.log(people);