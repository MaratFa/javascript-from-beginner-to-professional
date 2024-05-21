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

const employee1 = new Employee("John", "Johnson", 2);
const employee2 = new Employee("Jackie", "Chan", 4);

const employees = [];

employees.push(employee1, employee2);

/*  3. Set up a prototype to return the details of the person's first and last names and how
    long they've worked at the company: */

Employee.prototype.details = function () {
  return (
    this.firstName + " " + this.lastName + " works in the comnpany " + this.numberOfYears + " years."
  );
};

/*  4. Iterate the contents of the array to output the results into the console, adding some
    text to make the output a full sentence: */

employees.forEach((e) => console.log(e.details()));
