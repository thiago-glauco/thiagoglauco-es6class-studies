import { Car } from '../classes/car';
import { Drone } from '../classes/drone';

export class FleetDataService {

  constructor( ) {
    this.cars = [];
    this.drones = [];
  }

  loadData( fleet ) {

    for (let data of fleet ){
      switch( data.type ) {
        case 'car': 
          let car = loadObject(data);
          this.cars.push( car );
          break;
        case 'drone':
        let drone = loadObject(data);
          this.drones.push( data );
          break;
      }
    }
  }

  loadObject ( obj ) {
    switch( obj.type ) {
      case 'car':
        let c = new Car(obj.license, obj.model, obj.latLong)
        c.miles = obj.miles;
        c.make = obj.make;
        return c;
      case 'drone':
        let d = new Car(obj.license, obj.model, obj.latLong)
        d.airTime = obj.airTime;
        d.base = obj.base;
        return d;
    }
  }
}
