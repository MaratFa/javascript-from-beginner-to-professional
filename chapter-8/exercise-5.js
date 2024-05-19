/*  
Using the replace() string method, complete this vowel replacer exercise by
replacing the vowels in a string with numbers. You can start with this string:

I love JavaScript

And turn it into something like the following:

2 l3v1 j0v0scr2pt

*/




// 1. Create the previously specified string, and convert it to lowercase:

let string = "I love JavaScript. And you?".toLowerCase();

// 2. Create an array containing the vowels: a, e, i, o, u:

const array = ["a", "e", "i", "o", "u"];

/* 3. Loop through each letter you have in the array, and output the current letter
      into the console so that you can see which letter will be converted: */

array.forEach((e, i) => {
  console.log(e);

  /* 4. Within the loop, using replaceAll() update each vowel substring with the
        index value of the letter from the vowel array.
            Using replace() will only replace the first occurrence;
            if you use replaceAll() this will update all matching
            results.
  */

  string = string.replaceAll(e, i);
});

// 5. Once the loop completes output the result of the new string into the console:

console.log(string);
