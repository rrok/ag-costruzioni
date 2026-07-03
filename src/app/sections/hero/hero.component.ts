import { Component } from '@angular/core';
import { SITE } from '../../data/site-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly site = SITE;
  readonly waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    'Ciao AG Costruzioni! Vorrei un preventivo.'
  )}`;
}
