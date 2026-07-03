import { Component } from '@angular/core';
import { SITE } from '../../data/site-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly site = SITE;
  readonly anno = new Date().getFullYear();
}
