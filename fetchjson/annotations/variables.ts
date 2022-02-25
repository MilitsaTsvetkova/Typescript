let apples: number = 5;

// apples = "hi";

//array

let colors: string[] = ["red", "yellow", "green"];

//classes

class CarTest {
  brand: "haha";
}
let myCar: Car = new Car();

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations

//1) function that returns any type

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
// coordinates.blbls

//2) when we declare variable on one line and initialize it later

let words = ["red", "green", "yellow"];

let foundWord: boolean;
for (let index = 0; index < words.length; index++) {
  if (words[index] === "greenish") {
    foundWord = true;
  }
}

//3)variable whose type cannot be inferred correctly

let number = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let index = 0; index < number.length; index++) {
  if (number[index] > 0) {
    numberAboveZero = number[index];
  }
}
