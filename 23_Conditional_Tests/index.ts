//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict true.")
console.log(car == 'subaru')

console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');

console.log("Is car != 'SUBARU'? I predict true.");
console.log(car != 'SUBARU');

console.log("Is car != 'audi'? I predict true.");
console.log(car != 'audi');

console.log("Is car upper case == 'SUBARU'? I predict true.");
console.log(car.toUpperCase() == 'SUBARU') ;


console.log("Is car == 'audi'? I predict false.")
console.log(car == 'audi')

console.log("Is car == 'toyota'? I predict false.");
console.log(car == 'toyota');

console.log("Is car == 'ford'? I predict false.");
console.log(car == 'ford');

console.log("Is car == 'Subaru'? I predict false.");
console.log(car == 'Subaru');

console.log("Is car == 'SUBARU'? I predict false.");
console.log(car == 'SUBARU');