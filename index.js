// Import stylesheets
import './style.css';
import { Car } from './classes/car.js';
import { Vehicle } from './classes/vehicle';
import { Drone } from './classes/drone';
import { FLEET } from './services/fleet-data';
import $ from "jquery";
import { Button } from './ui/button';
import { Image } from './ui/image';
import { FleetDataService } from './services/fleet-data-service';


let b = new Button('Click Me');
b.appendToElement($('body'));

let image = new Image('https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
image.appendToElement($('body'));

// Write Javascript code!

const fleetData = new FleetDataService();
fleetData.loadData( FLEET );

let cars = fleetData.filterCarsByMake('a');
for (let c of cars) {
  console.dir(c);
}




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