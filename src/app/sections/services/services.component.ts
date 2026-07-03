import { Component } from '@angular/core';
import { SERVIZI } from '../../data/site-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly servizi = SERVIZI;
}
