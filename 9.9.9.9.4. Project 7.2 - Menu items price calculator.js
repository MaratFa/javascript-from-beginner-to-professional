// Create a class which will allow you to work out the combined price of a number of items, and interact with it to work out the total cost of different orders:

// 1. Create a class that contains the prices of two menu items as private field declarations:

class Total {
  #price1 = 20;
  #price2 = 40;

  // 2. Use the constructor in the class to get the argument values (how many of each item are being bought):

  constructor(quantaty1, quantaty2) {
    this.total1 = this.#price1 * quantaty1;
    this.total2 = this.#price2 * quantaty2;
  }

  // 3. Create a method to calculate and return the total cost depending on how many of each item the user selects:

  calculation() {
    return this.total1 + this.total2;
  }

  // 4. Use a getter property to grab the value output by the calculation method:

  get output() {
    return this.calculation();
  }
}

// 5. Create two or three objects with different combinations of menu selections, and output the total cost in the console:

const object1 = new Total(2, 3);
console.log(object1.output);

const object2 = new Total(20, 30);
console.log(object2.output);
