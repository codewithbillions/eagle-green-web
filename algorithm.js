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

// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length -1;

//     while(leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex +  rightIndex) / 2)
//         if(target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if(target < arr[middleIndex]) {
//             rightIndex = middleIndex -1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return "e no dey here"
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))
// console.log(binarySearch([-5, 2, 4, 6, 10], 20))

// logarithimic- O(logn)

// SORTING ALGORITHM
// BUBBLE SORT
// INSERTION SORT
// QUICK SORT
// MERGE SORT

// BUBBLE SORT

// PROBEM STATEMENT: Given an array of Integers Sort the array.
// const arr = [-6, 20, 8, -2, 4]


// bubbleSort(arr) => [-6, -2, 4, 8, 20]

// Bubble Sort Idea.

// compare adjacent element in the array and swap the positions if they are not in the intended order.

// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for(let i = 0; i < arr.length -1; i++) {
//         if (arr[i] > arr[i+1]) {
//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swapped = true
//         }
//     }
//     } while(swapped) 
// }

// const arr = [-6, 20, 8, -2, 4, 6, 10, 40, 62 ,101,]
// bubbleSort(arr)
// console.log(arr)

// INSERT SORT
// lets first understand the idea of the insertion Sort
// with insertion sort you first split the array into sorted and unsorted part.
// Assume that the first element is already sorted  and the remaining unsorted.
// Select an unsorted element and compare with all the elements in the sorted part.
// if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger element in the sorted part towards the right.

// const arr = [-6, 20, 8, -2, 4, 6, 10, 40, 62 ,101]

// function insertionSort(arr){
//     for(let i = 0; i < arr.length; i++) {
//         let numberToInsert = arr[i]
//         let j = i -1
//         while(j >= 0 && arr[j] > numberToInsert) {
//             arr[j+1] = arr[j]
//             j = j -1
//         }
//          arr[j+1] = numberToInsert
//     }
// }

//  const arr = [-6, 20, 8, -2, 4, 6, 10, 40, 62 ,101]
//  insertionSort(arr)
//  console.log(arr)
// bigO is quadratic time complexity

// QUICK SORT   

// Problem: Given an array of integers, sort the array.

// sorting can either be ascending or descending
// const arr =[-6, -2, 4, 8, 20]
// QuickSort(arr) => Should return [-6, -2, 4, 8, 20].


// Quick sort idea
// Identify the pivot element in the array
// - pick the first element as a pivot
// - pick the last element as a pivot
// - pick a random element as a pivot
// - pick median element as a pivot

// function quickSort(arr) {
//     if (arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length -1];
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length -1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i]);
//         }
//     }
// return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(quickSort(arr))// [-6, -2, 4, 8, 20]
// returns a sorted array.
// bigO is O(n^2)
// average case complexity is O(nlogn)

// Merge SORT

// Problem: Given an array of integers, sort the array.
// sorting can either be ascending or descending
// const arr =[-6, 20, 8, -2, 4]
// MergeSort => Should return [-6, -2, 4, 8, 20].

// Merge Sort idea
// -divide the array into sub arrays, each containing only one element(An array with one element is considered sorted)
// - repeatedly merge the sub arrays to produce new sorted sub-arrays until there is only one sub-array remaining. That will be the sorted array.

// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//     const sortedArr = []

//     while(leftArr.length && rightArr.length) {
//         if(leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(mergeSort(arr))// [-6, -2, 4, 8, 20]
//
//
// >>>>>>>>>> FIBONACCI SEQUENCE
// problem _ Given a number 'n', find the 'n' element of the Fibonacci sequence.
// {0,1,1,2,3,5,8,13,21,34,55,55+34=89,89+55=144,⋯}

// The first two numbers in the sequence are 0 and 1.
// fibonacci[2] = [0,1]
// fibonacci[3] = [0,1,1]
// fibonacci[7] = [0,1,1,2,3,5,8]

// function fibonacci(n) {
//     const fib = [0, 1]
//     for(let i = 2; i < n; i++) {
//         fib[i] = fib[i-1 ] + fib[i-2]
//     }
//     return fib
// }

// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(100))

// as the number increases the times line 235 will run will also increases

// RECURSION
// Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.

// problem question: Given the number 'n', find the nth element of the fibonacci sequence.

// Rather than the entire sequence we are only interested in the number present at a certain position in the sequence.

// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8

// F represent a function to calculate the fibonacci sequence

// Fn = Fn-1 + Fn -2
// what is F2? F2 = F1 + F0
// what is F1? F1 = F1 + F0 = 1

// function recursiveFibonacci(n) {
//     if(n < 2) {
//         return n
//     }
//  return recursiveFibonacci(n-1) + recursiveFibonacci(n -2)
// }

// console.log(recursiveFibonacci(0)) // 0
// console.log(recursiveFibonacci(1))//  1
// console.log(recursiveFibonacci(6))//  8

// recursive Factorial
// problem: given an integer 'n', find the factoral of that integer


// factorial(4) = 4*3*2*1 = 24
// factorial(5)= 5*4*3*2*1 = 120

// function recursiveFactorial(n) {
//     if (n === 0) {
//         return 1
//     }
//     return n * recursiveFactorial(n - 1)
// }

// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(5))


