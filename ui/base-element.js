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
    el.append( this.element );
  }

  getElementString( ) {
    throw 'Please, override getElementString in BaseElement';
  }
}