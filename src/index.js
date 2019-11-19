// Closures
const countDown = () => {
  // IMPLEMENTATION OF countDown:
  // 1- Declare a `count` variable with a value of 100. We will be mutating it, so declare it using a variable definition that is mutable.
  // 2- Declare a function `counter`. It should de-increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `countDown`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = countDown();
// myCounter(); // 99
// myCounter(); // 98

// Callback Functions

// 1 - Write an array of 5 favourite things (this could be sports, hobbies, colours etc.)
// 2 create two callback functions - one that gets the first item in the array and one that gets the last item in the array
// create a higher order function called OrderOfThings and call in the callback functions. return my `my favourite thing is ${first item}` and `my least favourite thing is ${last item} to their respective functions.

// Advanced Array Methods
const orders = [
  {
    id: 1,
    first_name: "Judi",
    last_name: "Wasserman",
    order: "500 cupcakes",
    cost: 350,
    paid: "in-full",
    readyfor: "December 1 2019"
  },
  {
    id: 2,
    first_name: "Jacob",
    last_name: "Ayanti",
    order: "5th Birthday Cake",
    cost: 150,
    paid: "deposit-of-half",
    readyfor: "November 10 2019"
  },
  {
    id: 3,
    first_name: "Ali",
    last_name: "Hawker",
    order: "300 cookies",
    cost: 200,
    paid: "no-deposit",
    readyfor: "October 20 2019"
  },
  {
    id: 4,
    first_name: "Nora",
    last_name: "Smith",
    order: "Wedding Cake",
    cost: 550,
    paid: "in-full",
    readyfor: "December 12 2019"
  },
  {
    id: 5,
    first_name: "Bill",
    last_name: "Avila",
    order: "300 Cake pops",
    cost: 150,
    paid: "deposit-of-half",
    readyfor: "January 2 2020"
  },
  {
    id: 6,
    first_name: "Emily",
    last_name: "Eastman",
    order: "450 cookies",
    cost: 350,
    paid: "no-deposit",
    readyfor: "March 16 2020"
  },
  {
    id: 7,
    first_name: "Feyza",
    last_name: "Suliman",
    order: "900 lava cakes",
    cost: 600,
    paid: "in-full",
    readyfor: "October 10 2019"
  },
  {
    id: 8,
    first_name: "Thuha",
    last_name: "Nguyen",
    order: "600 pastel de nata",
    cost: 480,
    paid: "no-deposit",
    readyfor: "December 5 2019"
  },
  {
    id: 9,
    first_name: "Juan",
    last_name: "Riena",
    order: "2 Birthday Cakes",
    cost: 300,
    paid: "in-full",
    readyfor: "May 1 2020"
  },
  {
    id: 10,
    first_name: "Tim",
    last_name: "Uwayezu",
    order: "Anniversery Cake",
    cost: 150,
    paid: "in-full",
    readyfor: "February 14 2020"
  }
];

//Be Creative
// Now that you are familiar with .forEach(), .map(), .filter(), and .reduce().  I want you to think of potential problems you could solve given the data set and the bakery theme.  Try to create and then solve 3 unique problems using one or many of the array methods  forEach, map and reduce.

// Problem 1

// Problem 2

// Problem 3

// review questions - check for understanding
// In your own words - define hoisting
// In your own words - define an anonymous function
// In your own words - what is a closure
// In your own words - what is a callback?
// In your own words - define function level scope
// In your own words - define map and what it is doing
// in your own words - define reduce and what it is doing
// in your own words - define for each and what it is doing
