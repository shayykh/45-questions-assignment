//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let vehicles: string[] = ['Toyota Car', 'Suzuki Motorcycle', 'Bicycle', 'Bus', 'Truck'];

for (let i = 0; i < vehicles.length; i++) {
    console.log(`I would like to own a ${vehicles[i]}.`);
}