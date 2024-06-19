//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car(manufacturer: string, model: string, ...options: [string, any][]) {
  let car: any = {
    manufacturer,
    model,
  };

  options.forEach(([key, value]) => {
    car[key] = value;
  });

  console.log(car);
}

car("Ford", "Mustang", ["color", "red"], ["year", "2020"]);

car(
  "Chevrolet",
  "Camaro",
  ["color", "blue"],
  ["year", "2019"],
  ["convertible", "true"]
);

car(
  "Dodge",
  "Challenger",
  ["color", "black"],
  ["year", "2018"],
  ["trim", "SRT"]
);
