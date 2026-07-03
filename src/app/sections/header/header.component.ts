import { Component } from '@angular/core';
import { SITE } from '../../data/site-data';

declare const bootstrap: {
  Collapse: { getOrCreateInstance(el: Element): { hide(): void } };
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly site = SITE;
  readonly voci = [
    { href: '#servizi', label: 'Servizi' },
    { href: '#chi-siamo', label: 'Chi siamo' },
    { href: '#mezzi', label: 'Mezzi' },
    { href: '#lavori', label: 'Lavori' },
    { href: '#contatti', label: 'Contatti' }
  ];

  /** Su mobile richiude il menu dopo il click su una voce. */
  chiudiMenu(): void {
    const menu = document.getElementById('menu-principale');
    if (menu?.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  }
}
