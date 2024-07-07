// Task 1: Write a Function that Adds Two Numbers
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// Task 2: Write a Function that Squares a Number
const square = x => x * x;
console.log(square(4)); // Output: 16

// Task 3: Use .map() to Create a New Array of Squared Numbers
const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);
console.log(squares); // Output: [1, 4, 9]

// Task 4: Write a Function that Multiplies Two Numbers
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // Output: 15

// Task 5: Use .filter() to Create a New Array of Even Numbers
const nums2 = [1, 2, 3, 4, 5, 6];
const evens = nums2.filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4, 6]

// Task 6: Use .reduce() to Sum All Numbers in an Array
const nums3 = [1, 2, 3, 4, 5, 6];
const sum = nums3.reduce((total, current) => total + current, 0);
console.log(sum); // Output: 21

// Function expression called divide
const divide = function () {
    return 2000 / 100;
}

// Arrow function called square
const Square = x => x * x;

// Arrow function called add
const Add = (a, b) => a + b;

console.log(divide()); // Output: 20
console.log(square(4)); // Output: 16
console.log(add(5, 3)); // Output: 8
