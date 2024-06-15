//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict true.")
console.log(car == 'subaru')

console.log("Is car === 25? I predict false.");
console.log(car === '25');

console.log("Is car != 'ford'? I predict true.");
console.log(car != 'ford');

console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');

console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() === 'SUBARU'? I predict false.");
console.log(car.toLowerCase() === 'SUBARU');

console.log("Tests with '&&' and '||':");
console.log(true && false); 
console.log(true || false);

let cars: string[] = ['subaru', 'audi', 'toyota', 'ford'];

console.log("Is 'subaru' in cars? I predict true.");
console.log(cars.includes('subaru'));

console.log("Is 'honda' in cars? I predict false.");
console.log(cars.includes('honda'));