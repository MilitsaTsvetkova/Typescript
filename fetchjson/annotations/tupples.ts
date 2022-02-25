const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];
pepsi[0] = "red";

//type alias
type Drink = [string, boolean, number];
const coke: Drink = ["brown", true, 30];
const sprite: Drink = ["clear", true, 50];

//represent a very specific concept inside of our application - not an array but a tupple

/*when to use:
-csv files  */
const carSpec: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
