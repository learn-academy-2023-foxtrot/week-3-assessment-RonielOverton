// ASSESSMENT 3: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { it } = require("node:test")


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fibSeq", () => {
  it("returns an array", () => {
    expect(fibSeq(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSeq(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:
// Name: fibSeq
// Input: Number
// Output: an array containing the Fibonacci sequence.
// Process: create a function that iterates through a array using a for loop.
//And then add the added value to the end of the array using .push()

//***(Not gonna lie I barely understand this Fibonacci sequence. I had to look it up)
// I was having some issues with this first process
// I went and made a more simpler solution. I do realize my return was in the wrong code block with the first attempt

// const fibSeq = (n) => {
//   const fibArr = [1, 1]
//   for(let i = 2; i< n; i++){
//    const nextNum = fibArr[i-2] + fibArr[i-1]  
//     fibArr.push(nextNum)
//     return fibArr
//   }
// }

  const fibSeq = (num) => {
    fib = [1, 1]
    for(let i = 2; i < num; i++){
      fib[i] = fib[i-2] + fib[i-1] 
    }
    return fib
  }
// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("sortArr", ()=> {
  it("returns an array", () => {
    expect(sortArr(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortArr(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Pseudo code:
// Name; sortArr
// Input: object
// Output: array
// Process: create a function that will take in an object and output an array with each value sorted from lowest to highest. using Object.values and the compareNumbers function passed in .sort() to sort from lowest to highest.



function compareNumbers(a, b) {
  return a - b;
}


const sortArr = (obj)=> {
  const objVal = Object.values(obj) 
    return objVal.sort(compareNumbers)
}
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accSum", () => {
  it("returns an array", () => {
    expect(accSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accSum(accountTransactions3)).toEqual([])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Pseudo code:
// Name: accArr
// Input: array
// Output: array
// Process: create a function that will take in a array and output array with an accumulating sum and a empty array should return an empty array.

// Step 1: create variable for 0 index
// Step 2: add 1st index to 0 index
// Step 3: add 2nd index to 0 index
// Step 4: add 3rd index to 0 index

// *** I did things a little different the second go around
// step 1 create variable for return array
// step 2 set return array and parameter index
// step 3 iterate through array
// step 4 create sum variable and have it equal return array's index value minus 1 plus parameter's index.
// step 5 return return array's index plus the sum.


const accSum = (arr) => {
  const returnArr = []
  returnArr[0] = arr[0]

  for(let i = 1; i < arr.length; i++){
    const sum = returnArr[i-1] + arr[i]
    returnArr[i] = sum
    
  }
  return returnArr
}