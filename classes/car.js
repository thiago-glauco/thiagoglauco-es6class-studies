import { Vehicle } from './vehicle.js';

export class Car extends Vehicle {
  constructor( licenseNum ) {
    super( licenseNum );
    console.log("Building a new Car");
    this.gpsEnabled = false;
  }
  start() {
    super.start();
    console.log("Oil is Ok!");
    console.log("Gas is Ok!");
    super.start();
  }
}