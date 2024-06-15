//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.


//Program 15
let guests: string[] = ['Tariq', 'Jinnah', 'Iqbal', 'Quaid'];

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are cordially invited to dinner.`);
}
let cantAttend: string = 'Jinnah';

console.log(`\nUnfortunately, ${cantAttend} can't make it to the dinner.\n`);

let newGuest: string = 'Rehmat Ali';
guests[guests.indexOf(cantAttend)] = newGuest;

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});

//Program 16
console.log('\nWe found a bigger dinner table!\n');

guests.unshift('Sir Syed');
guests.splice(Math.floor(guests.length / 2), 0, 'Shah Waliullah');
guests.push('Haji Shariatullah');

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});