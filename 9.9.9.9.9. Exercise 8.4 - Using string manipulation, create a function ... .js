/*  
Using string manipulation, create a function that will return a string with the first
letter of all the words capitalized and the rest of the letters in lowercase. You should
transform the sentence 'thIs will be capiTalized for each word' into 'This Will Be
Capitalized For Each Word':
*/



/* 1. Create a string with several words that have letters with different cases, a
      mix of upper and lowercase words: */

const string = "A STRING with SeVeraL WORDS";

/* 2. Create a function that gets a string as an argument, which will be the value
      that we will manipulate: */

function result(string) {
    
  /* 4. Create an empty array that can hold the values of the words when we
        capitalize them: */

  let array1 = [];

  /* 3. In the function first transform everything to lowercase letters.
     5. Convert the phrase into words in an array using the split() method.
     6. Loop tht each one independently. You can use forEach() for this.
     7. Using slicrough each one of the words that are now in the new array, so you
        can selece() isolate the first letter in each word, then transform it to
        uppercase. Again using slice(), get the remaining value of the word
        without including the first letter. Then concatenate the two together to form
        the word that is now capitalized: */

  string
    .toLowerCase()
    .split(" ")
    .forEach((e) => {
      let word = e.slice(0, 1).toUpperCase().concat(e.slice(1));

      /* 8. Add the new capitalized word into the blank array that you created. By the
            end of the loop you should have an array with all the words as separate
            items in the new array: */

      array1.push(word);
    });

  /* 9. Take the array of updated words and using the join() method, transform
          them back into a string with spaces between each word: */

  return array1.join(" ");
}

/* 10. Return the value of the newly updated string with capitalized words that can
       then be output into the console: */

result(string);
