import { Component } from '@angular/core';
import { MEZZI } from '../../data/site-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-fleet',
  imports: [RevealDirective],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss'
})
export class FleetComponent {
  readonly mezzi = MEZZI;
}
