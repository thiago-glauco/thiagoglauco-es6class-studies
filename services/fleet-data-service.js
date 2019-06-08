import { Car } from '../classes/car';
import { Drone } from '../classes/drone';
import { DataError } from './data-error'

export class FleetDataService {

  constructor( ) {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  loadData( fleet ) {

    for (let data of fleet ){
      switch( data.type ) {
        case 'car':
          if( this.validateCarData( data )) {
            let car = this.createObject(data);
            this.cars.push( car );
          } else {
            this.errors.push( new DataError( "Invalid car data", data))
          }
          break;
        case 'drone':
          let drone = this.createObject(data);
          this.drones.push( drone );
          break;
        default:
          let e = new DataError('Invalid vehicle type', data );
          this.errors.push( e );
          break;
      }
    }
  }

  createObject ( obj ) {
    switch( obj.type ) {
      case 'car':
        try {
          let c = new Car(obj.license, obj.model, obj.latLong)
          c.miles = obj.miles;
          c.make = obj.make;
          return c;
        } catch {
          this.errors.push( new DataError('Error loading car', obj))
        }
        return null;
      case 'drone':
        try{
          let d = new Drone(obj.license, obj.model, obj.latLong)
          d.airTime = obj.airTime;
          d.base = obj.base;
          return d;
        } catch {
          this.errors.push( new DataError('Error loading drone', obj))
        }
        return null;
    }
  }

  validateCarData( car ) {
    let requiredProps = 'license model make miles latLong'.split(' ');
    let hasErrors = false;
    for( let field of requiredProps ) {
      if( !car[field] ) {
        this.errors.push(new DataError(`Absence of ${field} field in car object`, car));
        hasErrors = true;
      }
    }
    if( Number.isNaN(Number.parseFloat(car.miles))) {
      this.errors.push( new DataError( 'invalid mileage', car));
      hasErrors = true;
    }
    return !hasErrors
  }
}
