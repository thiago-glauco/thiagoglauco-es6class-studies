import { BaseElement } from './base-element';

export class TitleBar extends BaseElement {
  constructor( title ) {
    super( );
    this.title = title;
  }
  
  getElementString( ) {
    return `
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">${this.title}</span>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content"><p>Page Content</p></div>
        </main>
      </div>
    `;
  }
}