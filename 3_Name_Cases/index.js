//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName = "shayan shaikh";
console.log(myName.toUpperCase()); //UpperCase
console.log(myName.toLowerCase()); //LowerCase
const words = myName.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
console.log(words.join(" ")); //TitleCase
export {};
// Alternative method:
// const words = myName.split(" ");
// words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");
// console.log(words.join(" ")); //TitleCase
