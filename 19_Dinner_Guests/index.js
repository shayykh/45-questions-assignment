//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//Program 14
let guests = ['Tariq', 'Jinnah', 'Iqbal', 'Quaid'];
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are cordially invited to dinner.`);
}
//Program 19
console.log(`\nNumber of people invited to dinner: ${guests.length}`);
export {};
