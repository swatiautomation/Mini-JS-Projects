class Car {
  model;
  brand;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.model = carDetails.model;
    this.brand = carDetails.brand;
    // this.speed = speed;
    // this.isTrunkOpen = isTrunkOpen;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
    console.log(
      `${this.model} ${this.brand} ${this.speed}km/h, trunk is ${trunkStatus}`
    );
  }
  go() {
    if (!this.isTrunkOpen) {
      this.speed += 5;
    }
    if (this.speed > 200) {
      this.speed = 200;
    }
  }
  break() {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class raceCar extends Car {
  accelerate;
  constructor(carDetails) {
    super(carDetails);
    this.accelerate = carDetails.accelerate;
  }
  go() {
    this.speed += this.accelerate;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');
// console.log(car1);
// console.log(car2);

car1.openTrunk();
car1.displayInfo();
car1.closeTrunk();

car2.displayInfo();
car2.go();

const racecar = new raceCar('Ferrari', 'F8', 299);
racecar.go();
racecar.displayInfo();
