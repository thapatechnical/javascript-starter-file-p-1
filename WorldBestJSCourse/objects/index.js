//* ==============================
//* Object in JavaScript
//* ==============================
//? Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.

//* ==============================
//* Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:

// const product = {
//   id: 1,
//   pName: "laptop",
// };
// let person = {
//   name: "Vinod",
//   age: 30,
//   isStudent: false,
//   greet: function () {
//     console.log("Welcome to World Best CSS Course");
//   },
// };

let person = {
  name: "Vinod",
  age: 30,
  "is'Student": false,
  greet: function () {
    console.log("Welcome to World Best JavaScript Course");
  },
};

//* ==============================
//* Accessing Properties:
//* ==============================
//? You can access object properties using dot notation or square bracket notation:

// console.log(person.age);
// console.log(person.name);
// console.log(person[`is'Student`]);

//* =================================
//* Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones:
// person["job"] = "web dev";
// // person.age = 18;
// person["age"] = 20;

// console.log(person);

//* =================================
//* Methods:
//* =================================
//? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:

// person.greet();

//* ========================================
//* We can add dynamic keys in an object
//* ========================================

// let idType = "studentId";

// let student = {
//   [idType]: "A123456", // Dynamic key based on idType
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
//     );
//   },
// };

// student.greet();

//? useCase: when we want to get the user name and value in react

//* =================================
//* Data Modeling:
//* =================================
//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   start: function () {
//     console.log("Engine started!");
//   },
// };

//* =====================================
//*  Interview Question
//* ======================================

//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
//? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

//? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

//? Object.assign() is used to copy properties from one or more source objects to a target object.

//* =====================================
//* Comparison by Reference:
//* ======================================

//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================

//?JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa.

// let student = {
//   id: 1,
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: false,
//   greet: function () {
//     console.log(
//       `hey my id is ${student.identity} & my name is ${student.sName}`
//     );
//   },
// };

// let jsonData = JSON.stringify(student);
// console.log(jsonData);
// let parsedObject = JSON.parse(jsonData);
// console.log(parsedObject);

//* =====================================
//* "this" Object
//* ======================================

//? In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.
// ("use strict");

// x = 5;
// console.log(x);

// function callme() {
//   console.log(this);
// }

// callme(); // try to run on browser console

//todo  Let's check the this keyword values in an object methods

//* Regular Function Expression:
// const obj = {
//   name: "Kodyfier",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet();

//* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
// const obj = {
//   name: "Kodyfier",
//   greet() {
//     console.log(this);
//   },
// };

// obj.greet();

//* Fat Arrow Function
// const obj = {
//   name: "thapa technical",
//   greet: () => {
//     console.log(this);
//   },
// };

// obj.greet();

//* =====================================
//* Objects Useful Methods
//* ======================================

// const product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computers",
//   brand: "ExampleBrand",
//   price: 999.99,
//   stock: 50,
//   description:
//     "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
//   image: "image link will be added during projects",
// };

//? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.

//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.

//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.

//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.

//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.

//* =====================================
//* Interview Question - Objects
//* ======================================

//! 1: What will be the output?

//* ===============================================
//* Interview Question - Object Manipulation:
//* ================================================
//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// addSubjectGrade(student, "computer", 92);
// console.log(student);

//* ===============================================
//* Interview Question - Object Comparison:
//* ================================================
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// // Example usage:
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false

//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================
//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

console.log(arrayToObj(inputArray));
// Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }
