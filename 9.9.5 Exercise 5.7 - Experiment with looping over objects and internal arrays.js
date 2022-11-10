/*
    -- Description--

    1. Create a simple object with three items in it.
    2. Using the for in loop, get the properties' names and values from the object
       and output them into the console.
    3. Create an array containing the same three items. Using either the for loop or
       the for in loop, output the values from the array into the console.

*/

const object = {
    property_1: "Item 1",
    property_2: "Item 2",
    property_3: "Item 3"
};

for (let property in object) {
    console.log(property, object[property]);
}

const array = ["Item 1", "Item 2", "Item 3"];
for (let property in array) {
    console.log(property, array[property]);
}
for (let i = 0; i < array.length; i++) {
    console.log(i, array[i]);
}