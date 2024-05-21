/* Output the decodeURIComponent() for the string How's%20it%20going%3F to the
console. Also, encode the string How's it going? to be output into the console.
Create a web URL and encode the URI : */

// 1. Add the strings as variables in the JavaScript code:

const string1 = "How's%20it%20going%3F";
const string2 = "How's it going?";

// 2. Using encodeURIComponent() and decodeURIComponent() output the results into the console:

const decoded_uri = decodeURIComponent(string1);
console.log(decoded_uri);

const encoded_uri = encodeURIComponent(string2);
console.log(encoded_uri);

// 3. Create a web URI with request parameters http://www.basescripts.com?=Hello World":

const webURI = encodeURI("http://www.basescripts.com?=Hello World");

// 4. Encode and output the web URI into the console:

console.log(webURI);
