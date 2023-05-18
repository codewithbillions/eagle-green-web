// JAVASCRIPT
// WHAT IS JS?
// where does js code runs?




// what is the difference between javascript and ECMA script?

// ECMASCRIPT is just a specification, 
// JAVASCRIPT is a programming language that confirms this specification.

// console.log("Hello World")


// VARIABLES
// in programming language we use variable to store data temporarily in a computer memory.

// // a variable is like a box, what we put in the box is the value we assign to a variable thats the data and the label that we put on the box is that name of our variable.
// declaring a variable
// var
// let 
// const

// let name = "victoria"
// console.log(name)

//RULES FOR NAMING A VARIABLE

// 1) it cannot be a reserved key word
// 2) it should be meaningful
// let a = "victoria" X

// 3) it cannot start with a number
// let 1name = " victoria" X

// 4) it cannot cointain space or hyphen -
// let _name__ = " victoria"
// // 5) It is case sensitive

// let name = "victoria"
// let Name = "victoriagvjhhgfjkhgj"

// let firstName = "victoria", lastName= "Akanni"

// let firstName = "victoria"
// let lastName= "Akanni"

// Constant

// const amount = 200;
// amount = 500

// console.log(amount)

// Primitive data types
// Number
// string
// null
// undefined
// boolean

// let age = 40;
// let name = "victoria"
// let isBeautiful = true
// let firstName 
// let bestFriend = null

// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(isBeautiful))
// console.log(typeof(firstName))
// console.log(typeof(bestFriend))

// REFERENCE Type
// Object
// array
// function

// let person = {
//     name: 'victoria',
//     age: 40,
//     favFood: "spagetti"
// }


// //dot notation
// person.surname = 'akanni'

// // bracket notation
// person['ocupation'] = 'gomycode student'
// console.log(person)

//Array
// A data structure we use to represent a list of items
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green'

// console.log(selectedColors.length)

// FUNCTION

// function nameOfFunction() {}

// function greet() {
// console.log('hello world')
// }

// greet()


// function greet(name) {
// console.log('hello  ' + name)
// }

// greet('victoria')

// function greet(name, surname) {
// console.log('hello  ' + name + " " + surname)
// }

// greet('victoria', "Akaani")

// function square(number) {
//     return number * number
// }

// console.log(square(10))


// STRING CONCATENATION
// let name = "victoria";
// let age = 80;

// // Archaic Method
// console.log("my Name is " + name + " and i am " + age + " years old")

// // Template Literals Method
// console.log(`My name is ${name} and i am ${age} years old`)

// STRING METHODS AND PROPERTIES
// let s = 'HELLO WORLD'
// let val
// get length
// val = s.length
// console.log(val)

// string Index
// console.log(s[0])

// Changing case
 //val = s.toUpperCase();
// val = s.toLowerCase();
// console.log(val)

// console.log(s.toLowerCase())
// 
// Get a substring
// val = s.substring(0,5)
// console.log(val)

// Split into array
// val = s.split('')
// console.log(s)
// console.log(val)

// ARRAY METHOD AND PROPERTY
// const colors = ['black', 'white', 'red', 'blue']

// // Get the length
// // console.log(colors.length)

// // get one value
// // console.log(colors[3])

// // adding a value using push()
// colors.push('yellow')

// // add to the beggining
// colors.unshift("purple")

// // Remove last value
// colors.pop();

// // Remove first value
// colors.shift();

//     // check if it is array
// console.log(Array.isArray(colors))

// ARITHEMETIC OPERATORS
// + , - , * , / , % , ++ , -- , **
// console.log(13 + 13)
// console.log(13 - 3)
// console.log(13 * 3)
// console.log(13 / 3)
// console.log(12 % 3)
// console.log( 3 * "test")
// console.log( '3' ** '3')
// console.log(5+3)
// console.log(5+'3')

// let i = 5
// console.log(--i)
// console.log(++i)

// OBJECT LITERALS

// const person = {
//     firstName: "Victoria",
//     age:30,
//     hobbies: ['music', 'movies', 'baking', 'eating'],
//     address: {
//         street: '203 gomycode',
//         city: 'wtvr',
//         state: 'ogun state'
//     }
// }



// person.email = 'vicky@gmail.com'
// person.hobbies.push('gisting')

// person.firstName = "akanni"
// delete(person.age)
// console.table(person)
// console.log(person.address.city)

// COMPARISON OPERATORS
// = assigns a value to a variable*

// == compares the value of the variables

// === compares the value and type of the variables

// ! returns the opposite boolean

// != compares the inequality based on value

// !== compares the inequality based on value and type


// research on this
// LOGICAL OPERATORS
// Thats the AND(&&), OR(||) and the NOT(!) operators

// LOOPS

// for loop

// for(let i = 0; i <= 5; i++) {
//     console.log(`${i}`)
// }

// //while checks condition before  executing the block
// let i =1
// while(i <= 5) {
//     console.log(`${i}`)
//     i++
// }


// const numbers = [99, 70, 66];

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// // // ********************** For...of Loop
// for (let x of numbers) {
// console.log(x);
// }

// // // ********************** For...in Loop

// for (let i in numbers) {
// console.log(numbers[i]);

// }


//CONDITIONAL STATEMENT
// simple if and else statement

// const x = 2

// if ( x === 10) {
//     console.log('x is 10')
// } else if (x > 10) {
//     console.log('x is greater than 10')
// } else {
//     console.log('x is less than 10')
// }

// SWITCH STATEMENT
let color = "red"

// switch (color) {
//     case 'red':
//         console.log('color is red');
//     break;
//     case 'blue':
//         console.log('color is blue')
//     break;
//     default:
//         console.log('color is neither red nor blue')    
// }

// Ternary Operator / shorthand if
let colorQualified = color ==='red' ? 'is red' : 'isnt red';
console.log(`${colorQualified}`)

condition ? true : false