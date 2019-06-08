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
          this.cars.push( data );
          break;
        case 'drone':
          this.drones.push( data );
          break;
      }
    }
  }

}
