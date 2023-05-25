//  ES6 workshop!!

// Variable Scope
// ES6 introduced 
// const 
// let
// scope of a variable is the range by which a variable can be AccessTimeFilledtwo type of scope!.
 //1.global scope
//  a variable that can be accessed anywhere in your code

// 2.local scope
//can be accessed with the block of functions

// const scope = () => {
//     const ebuka = 'ebuka';

//     {const papa = 'papa';
//     let uzor = "uzor"
//     console.log("inside the block", ebuka) 
//   }
// console.log("outside the block",papa)
// console.log("outside the block",uzor)
// }

// scope()

// normal function
// function sayHello(name) {
//     return "hello  " + name

// }

// ES6 function

// const sayHello = (name) => {
//     return "hello  " + name

// }

// const sayHello = name => "Hello " + name

// const sayHello = name => `Hello ${name} `

// console.log(sayHello("victoria"))

// ES6 ternary operator
//Ternary operator
// A ternary operator is used to evaluate a condition and executes a block of code based on the condition.

// condition ? expression1 : expression2
// The ternary operator evaluates the condition.

// If the condition is true, expression1 is executed.
// If the condition is false, expression2 is executed.

//  let marks = 30
//  let result = (marks >= 40) ? 'Passed' : 'Failed';
//  console.log(`You ${result} the exam`);

// ARRAY
// ******MAP METHOD
// map method execute statement and return a new array

 let array = [15, 24, 15, 26, 1, 8, 45]
// let array1 = array.map(el => el * 2)
// console.log(array1)

//*** FOR EACH */
// for each method does not return a new array
// array = array.forEach(el => console.log(el * 2) )
// console.log(array)

// FIlTER METHOD
// filter method return the element that passes a condition

// let array2 = array.filter((el) => el < 20)
// console.log(array2)

// REDUCE METHOD
// it adds the previous element to the current element 
// reduces it to a single element

// let array3 = array.reduce((previous, current) => previous + current)
// console.log(array3)

// ARRAY FIND
// it return the first element that passes the condition

// let array4 = array.find((el => el > 20))
// console.log(array4)

// ARRAY FIND INDEX
//array.findIndex return the index of the first element that passes the condition
// array5 = array.findIndex(el => el > 25)

// console.log(array5)

// ES6 destructuring and spread operator
// without destructuring
// let user = {
//     name: "victoria",
//     age: 40,
//     fullstack: {
//         track: "js",
//         skill: "ES6"
//     }
// }

// let a = (user) => {
//     return `my name is ${user.name}, i am ${user.age} and we are learning ${user.fullstack.track}: ${user.fullstack.skill}`
// }

// console.log(a(user));

// destructuring is unpacking element in an array and values in an object to a variable

// let user1 = {
//     name: "victoria",
//     age: 40,
//     fullstack: {
//         track: "js",
//         skill: "ES6"
//     }
// }

// let a = ({name , age, fullstack: {track, skill}}) => {
//     return `my name is ${name}, i am ${age} and we are learning ${track}: ${skill}`
// }
// console.log(a(user1))

// SPREAD OPERATOR
// it help you unpack element from one array to another
let user = {name: "papa", age:25, address:"lagos island"}
let infos = {track: 'full stack js', framework: 'react'}

let fullInfo = {...user, ...infos, array}

console.log(fullInfo)