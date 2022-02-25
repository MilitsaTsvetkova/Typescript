class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c", 8]);

//Generic constraints
class Cars {
  print() {
    console.log("I am a car");
  }
}
class House {
  print() {
    console.log("I am a house");
  }
}
//generic constraint
interface Printable {
  print(): void;
}

function printCarsOrHouses<T extends Printable>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    arr[index].print();
  }
}

printCarsOrHouses<House>([new House(), new House()]);
printCarsOrHouses<Cars>([new Cars(), new Cars()]);
