import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITE, TIPI_LAVORO } from '../../data/site-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly site = SITE;
  readonly tipi = TIPI_LAVORO;

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly sanitizer = inject(DomSanitizer);

  /** L'URL della mappa è fisso (site-data.ts), quindi è sicuro autorizzarlo. */
  readonly mapsEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    SITE.mapsEmbed
  );

  readonly form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    telefono: [''],
    tipo: [''],
    messaggio: ['', [Validators.required, Validators.minLength(10)]]
  });

  private inviato = false;

  nonValido(campo: 'nome' | 'messaggio'): boolean {
    const controllo = this.form.get(campo);
    return !!controllo && controllo.invalid && (controllo.touched || this.inviato);
  }

  /** Compone il messaggio e apre WhatsApp: nessun dato viene salvato. */
  inviaSuWhatsApp(): void {
    this.inviato = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const valori = this.form.getRawValue();
    const righe = [
      `Ciao AG Costruzioni! Sono ${valori.nome.trim()}.`,
      valori.tipo ? `Ho bisogno di un intervento: ${valori.tipo}.` : '',
      valori.messaggio.trim(),
      valori.telefono.trim() ? `Potete richiamarmi al ${valori.telefono.trim()}.` : ''
    ].filter(Boolean);

    const url = `https://wa.me/${this.site.whatsapp}?text=${encodeURIComponent(
      righe.join('\n')
    )}`;
    window.open(url, '_blank', 'noopener');
  }
}
