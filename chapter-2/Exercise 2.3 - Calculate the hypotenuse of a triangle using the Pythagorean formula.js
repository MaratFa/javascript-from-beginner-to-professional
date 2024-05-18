/*
    -- Description--
    
    1. Write some code to calculate the hypotenuse of a triangle using the Pythagorean
       theorem when given the values of the other two sides. The theorem specifies that the
       relation between the sides of a right-angled triangle is a*a + b*b = c*c.
    2. You can use prompt() to get the value for a and b. Write code to get the value from
       the user for a and b. Then square the values of both a and b before adding them
       together and finding the square root. Print your answer to the console.

*/

let a = prompt("Enter the value of the side adjacent to the triangle.");
let b = prompt("Enter the value of the opposite side to the triangle.");
console.log((a**2 + b**2) ** 0.5);
