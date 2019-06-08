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
          let car = loadObject(car);
          this.cars.push( car );
          break;
        case 'drone':
        let drone = loadObject(car);
          this.drones.push( data );
          break;
      }
    }
  }
}
