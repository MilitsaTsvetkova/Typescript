// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }
interface Reporatable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};
const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`
//   Name: ${vehicle.name}
//   Year: ${vehicle.year}
//   Broken? ${vehicle.broken}`);
//   console.log(vehicle.summary());
// };
// interfaces encourage us to write more generic functions - reusable functions/code
const printSummary = (item: Reporatable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);
