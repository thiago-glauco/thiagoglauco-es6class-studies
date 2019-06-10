import { BaseElement } from './base-element';

export class Image extends BaseElement {
  constructor( file ) {
    super( );
    this.file = file;
  }
  
  getElementString( ) {
    return `<image src="${this.file} width="80%">`;
  }
}