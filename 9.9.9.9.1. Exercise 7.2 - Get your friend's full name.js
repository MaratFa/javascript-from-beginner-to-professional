/* 1. Using the Person class from Practice exercise 7.1, add a method called
fullname, which returns the concatenated value of firstname and lastname
when invoked: */

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname() {
    return this.firstname + " " + this.lastname;
  }
}

// 2. Create values for person1 and person2 using two friends' first and last names:

let person1 = new Person("John", "Johnson");
let person2 = new Person("Jackie", "Chan");

// 3. Using the fullname method within the class, return the full name of one or both people:

console.log(person1.fullname());
console.log(person2.fullname());
