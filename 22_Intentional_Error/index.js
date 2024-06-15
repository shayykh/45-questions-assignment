//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let books = ["The Great Gatsby", "To Kill a Mockingbird", "1984"];
// console.log(books[3]); 
// This will produce an error because the index is out of bounds. The array only has 3 elements, so the highest index is 2.
console.log(books[2]);
export {};
