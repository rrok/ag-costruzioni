import { Component } from '@angular/core';
import { RECENSIONI, SITE } from '../../data/site-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [RevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  readonly recensioni = RECENSIONI;
  readonly site = SITE;
}
