import { Vehicle } from './vehicle.js';

export class Car extends Vehicle {
  constructor( license, model, latlong ) {
    super( license, model, latlong );
    this.make = null;
    this.miles = null;
  }
  start() {
    super.start();
    console.log("Oil is Ok!");
    console.log("Gas is Ok!");
    super.start();
  }
}