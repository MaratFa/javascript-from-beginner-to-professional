// Create a class to track the employees of a company:

// 1. Use first names, last names, and the number of years worked as values in the constructor:

class Employee {
  constructor(firstName, lastName, numberOfYears) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.numberOfYears = numberOfYears;
  }
}

/*  2. Create two or more people with values for their first names, last names, and the number
    of years they've worked at the company. Add the people into an array: */

let employees = [];

let employee1 = new Employee("first name 1", "last name 1", 2);
let employee2 = new Employee("first name 2", "last name 2", 4);
let employee3 = new Employee("first name 3", "last name 3", 6);

employees.push(employee1, employee2, employee3);

/*  3. Set up a prototype to return the details of the person's first and last names and how
    long they've worked at the company: */

Employee.prototype.personDetails = function () {
  return (
    "First name is " +
    this.firstName +
    "." +
    " Last name is " +
    this.lastName +
    "." +
    " Number of years is " +
    this.numberOfYears +
    "."
  );
};

/*  4. Iterate the contents of the array to output the results into the console, adding some
    text to make the output a full sentence: */

employees.forEach((e) => console.log(e));
