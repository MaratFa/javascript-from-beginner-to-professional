// 1. Create an array of descriptive words:

const descriptiveWords = [
  "Big",
  "Colossal",
  "Enormous",
  "Gigantic",
  "Huge",
  "Massive",
  "Substantial",
  "Tremendous",
  "Amusing",
  "Comical",
];

// 2. Create a function that contains a prompt asking the user for a name:

function userNamePromt() {
  let userName = prompt("Please, enter your name", "John");

  // 3. Select a random value from the array using Math.random:

  let arrayElement =
    descriptiveWords[Math.round(Math.random() * descriptiveWords.length)];

  // 4. Output into the console the prompt value and the randomly selected array value:

  console.log(userName, "is", arrayElement);
}

// 5. Invoke the function:

userNamePromt();
