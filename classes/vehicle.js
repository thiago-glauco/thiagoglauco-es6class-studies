export class Vehicle {
  constructor( licenseNum ) {
    console.log("Building a new Vehicle");
    this.licenseNum = licenseNum;
    this.gpsEnabled = true;
  }
  start() {
    console.log("Engines are on");
  }
}