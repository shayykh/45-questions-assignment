//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log(`You ordered a sandwich with: ${items.join(", ")}`);
}
sandwich("ham", "cheese", "lettuce");
sandwich("turkey", "bacon", "tomato", "mayo");
sandwich("peanut butter", "jelly");
export {};
