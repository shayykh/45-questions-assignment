//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians([
    "Harry Houdini",
    "David Copperfield",
    "David Blaine",
    "Penn Jeller",
    "Teller",
]);
export {};
