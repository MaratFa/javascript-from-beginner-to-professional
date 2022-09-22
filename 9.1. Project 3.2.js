/*
    1. Create an array to hold an inventory of store items.
    2. Create three items, each having the properties of name, model, cost, and
    quantity.
    3. Add all three objects to the main array using an array method, and then log
    the inventory array to the console.
    4. Access the quantity element of your third item, and log it to the console.
    Experiment by adding and accessing more elements within your data
    structure.
*/

const inventory = [
];
const item_1 = {
    name: "name_1",
    model: "model_1",
    cost: "1 $",
    quantity: 1 
}
const item_2 = {
    name: "name_2",
    model: "model_2",
    cost: "2 $",
    quantity: 2 
}
const item_3 = {
    name: "name_3",
    model: "model_3",
    cost: "3 $",
    quantity: 3 
}
inventory.push(item_1, item_2, item_3)
console.log(inventory)
console.log(inventory[2].quantity)