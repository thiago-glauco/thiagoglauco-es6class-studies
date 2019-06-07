// Import stylesheets
import './style.css';

// Write Javascript code!
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
console.log(window.droneId);