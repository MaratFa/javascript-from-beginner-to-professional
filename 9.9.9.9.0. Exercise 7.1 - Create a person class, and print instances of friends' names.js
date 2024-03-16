// 1. Create a class for Person including the constructor for firstname and lastname:

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// 2. Create a variable and assign a value of the new Person object using your friend's first and last names:

let person1 = new Person("John", "Johnson");

// 3. Now add a second variable with another friend's name using their first name and last name:

let person2 = new Person("Jackie", "Chan");

// 4. Output both friends into the console with a greeting of hello:

console.log("Hello " + person1.firstname);
console.log("Hello " + person2.firstname);
