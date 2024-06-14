//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//Program 14
let guests = ['Tariq', 'Jinnah', 'Iqbal', 'Quaid'];
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are cordially invited to dinner.`);
}
//Program 15
let cantAttend = 'Jinnah';
console.log(`\nUnfortunately, ${cantAttend} can't make it to the dinner.\n`);
let newGuest = 'Rehmat Ali';
guests[guests.indexOf(cantAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});
export {};
