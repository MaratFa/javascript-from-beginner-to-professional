/*
    Create variables for three numbers: a, b, and c. Update these variables with the
    following actions using the assignment operators:
    - Add b to a;
    - Divide a by c;
    - Replace the value of c with the modulus of c and b;
    - Print all three numbers to the console;
*/

let a = 1, b = 2, c = 3;
a += b;
a /= c;
c %= b;
console.log(a, b, c);
