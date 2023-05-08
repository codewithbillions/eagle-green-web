// var name = " victoria"
// var Num2 = 14;
// var _num3 = 20;

// var sum = num1 + Num2 + _num3;

// console.log(sum);

// var __sub1 = 10;
// var sub2 = 14;
// var sub3 = 20;

// var sub = __sub1 - sub2 - sub3;

// console.log(sub)
// console.log(num1)

// For your Presentation! ON JAVASCRIPT

// How to link js to html file?
// The loggin and the output 
// How to declare a variable?
// Data Types
// String concatenation
// String Method and properties
// Array method and properties
// Loops
// Condition
// Logical operator

// use google slide to create a comprehensive explanation on each of the concept!


// array

// stores mutiple data types
// const isMale = true
// const city = " lagos"
// const houseAddress = " 230 gomycode yaba"
// const person = {
//     name : "victoria",
//     age: 42,
//     address : [
//         city, houseAddress
//     ]
// }

// var array1 = ['victoria', 100, ' daniel', 700, isMale]

// console.log(array1[2])
// console.log(person.address[1])



// function greet(name, message) {
//     return name + " " + message
// }

// console.log(greet("victoria", "my love"))
// //  greet(victoria, sweetheart)

// function add( num1, num2, num3) {
//     return num1 + num2 + num3
// }
// console.log(add(20,2, 5))
// function nameOfFunction() {}

//inputs => algorithm => output

// problem statement 
// an algorithm of adding two number

//inputs:  a and b
// algorithm: add numbers using '+'
// return a value

// the output : sum of a and b

// var a = 7
// var b = 9

// var sum = a + b
// console.log(sum)

// absolute measure is not efficient enough bacause of different factores like programming Language,
// the kind of computer the program runs on, due to other programme running at the same time,
// quality of operating system.

// now we evaluate in terms of input size
// 1. time complexty- amount of time taken by an algorithm to RunCircle, as a funtion of input size
// 2. space complexity - amount of memory taken by an algorthm to run, as a function of input size

// Asymtotic notation - mathimatical tools to represent time and space complexity
// 1. big-0 Notation (worse case complexity)
// 2. Omega Notation - (best case complexity)
 //3. Theta Notation ( Average case complexity)

// big-O - object
// an object is a collection of key value pair

// const person = {
//     firstName: "John ",
//     lastName: "Doe"
// }
// // delete(person.firstName)

// console.log(person)
// person.age = 45

// console.log(person)
// insert
// remove
// access

// O(1) means constant time complexity

//array
//  const odd = [1, 3, 5, 7, 9]
//  odd.unshift(13)
//  console.log(odd)
 // start from 0 index increment by 1.
//  access - O(1)
//  search - O(n)

// big ) notation 
//the worse case complexity
// 1. it expressed interms of input size
// 2. it focuses on the bigger picture, without getting caught in the minute details


// function summation(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++ ) {
//         sum += i
//         console.log(1)
//     }

//     return sum
// }

// console.log(summation(4))

// 1 + 2 + 3 + 4 = 10

// time complexity
// O(n)- linear
// means at the input increases the time complexity also increases!


// function summation(n) {
//     return(n * (n + 1)) / 2
// }

// console.log(summation(4))

// SEARCH ALGORITHM.

// linear search.

// problem statement: given an array of 'n' elements and traget 't', find the index of 't' in the array. return " i no dey here" if the target element is not found.

//examples
// arr = [-5, 2, 10, 4, 6], t= 10 --> shoulld return 2
// arr = [-5, 2, 10, 4, 6], t= 6 --> shoulld return 4
// arr = [-5, 2, 10, 4, 6], t= 20 --> shoulld return -1


// function linearSearch(arr, target) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === target) {
//             return i
//         }
//     }
//     return "i no dey here"
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10))
// console.log(linearSearch([-5, 2, 10, 4, 6], 6))
// console.log(linearSearch([-5, 2, 10, 4, 6], 20))

// BINARY SEARCH
// problem statement: Given a sorted array of of 'n' elements and a target element 't', find the index of 't'
// in the array. return -1 if the target elemnt is not Found.

// arr = [-5, 2, 4, 6, 10], t =10 --> should return 4
// arr = [-5, 2, 4, 6, 10], t =6 --> should return 3
// arr = [-5, 2, 4, 6, 10], t =20 --> should return -1

// it must be a sorted Array
// find the middle element 
// if target is greater than middle element search left, if it is less search right!

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex +  rightIndex) / 2)
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex -1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return "e no dey here"
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))

// logarithimic- O(logn)