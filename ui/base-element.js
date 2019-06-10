import $ from 'jquery';

export class BaseElement {

  constructor() {
    this.element = null; //Jquery element
  }

  createElement(  ) {
    let s = this.getElementString( );
    this.element = $(s)
  }

  appendToElement( el ) {
    this.createElement();
    this.enableJS()
    el.append( this.element );
  }

  enableJS() {
   
  }

  getElementString( ) {
    throw 'Please, override getElementString in BaseElement';
  }


}