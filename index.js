// Import stylesheets
import './style.css';
import { Car } from './classes/car.js';
import { Vehicle } from './classes/vehicle';
import { Drone } from './classes/drone';
import { FLEET } from './services/fleet-data';
import { FleetDataService } from './services/fleet-data-service';
// Write Javascript code!

const fleetData = new FleetDataService();
fleetData.loadData( FLEET );
console.dir(fleetData.drones);
console.dir(fleetData.cars);

for ( let car of fleetData.cars )
  console.log( car.license )

console.dir( fleetData.errors )

/*
let c = new Car( 'abc1234' );
let d = new Drone();
console.log( c instanceof Car);
console.log( c instanceof Vehicle);
console.log( c instanceof Object);

console.log( d instanceof Object);

console.log("This car license is " + c.licenseNum);
console.log("This car gps is " + (c.gpsEnabled? 'enabled' : 'disabled'));
console.log("Starting the car: ");
c.start();

/*
class Drone {
  constructor( id, name ) {
    this._id = id;
    this.name = name;
  }
  fly() {
    console.log(`Drone ${this.name} is flying`);
  }

  static getCompany() {
    console.log("This drone was builted by Cybrary!!")
  }

  get id() {
    return this._id;
  }

  set id( value ) {
    this._id = value;
  }
}
//Static property:
Drone.maxHeight = 100;

let drone = new Drone( 'abc', 'Josh' );
Drone.getCompany();

console.log(`id: ${drone.id}, ${drone.name}`);
console.log(`id: ${drone['id']}, ${drone['name']}`);
console.log(Drone.maxHeight);
console.log(drone.maxHeight);

drone.fly();
drone.id= "123ABC";
console.log( drone.id )
console.log( typeof Drone );
console.log( typeof drone );
console.log( Drone );
console.log( drone );
console.log( drone instanceof Drone);
console.dir(drone);
let droneId = 5;
console.log(window.droneId);*/