class Vehicle {
  //   color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }
  constructor(public color: string) {}
  drive(): void {
    console.log("chugga chugga");
  }
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("yellow");
vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);
const car = new Car(3, "green");
car.startDrivingProcess();
