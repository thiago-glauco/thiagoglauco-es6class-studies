import { Vehicle } from './vehicle.js';

export class Drone extends Vehicle {
  constructor(license, model, latlong) {
    super( license, model, latLong);
    this.airTime = null;
    this.base = null;
  }
}