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

function square(number) {
    return number * number
}

console.log(square(10))