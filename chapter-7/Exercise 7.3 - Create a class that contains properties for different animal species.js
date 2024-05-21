/* Create a class that contains properties for different animal species and
   the sound that each species makes, and create two (or more) animals: */

// 1. Create a method that prints a given animal and its sound:

class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  animalSpeak() {
    console.log(this.species + ' ' + this.sound);
  }
}

// 2. Add a prototype with another action for the animal:

Animal.prototype.run = function () {
  console.log(this.species + " is running.");
};

// 3. Output an entire animal object into the console:

let cow = new Animal("cow", "moos");
let dog = new Animal("dog", "barks");

console.log(cow);
console.log(dog);
