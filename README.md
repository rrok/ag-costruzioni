# AG Costruzioni — sito vetrina

SPA **Angular 19 + Bootstrap 5**, senza backend: il form contatti apre WhatsApp
con il messaggio già compilato. Design "cantiere": giallo cantiere, nastro sui
titoli, schede tecniche in font mono.

## Comandi

```bash
npm install       # prima volta
npm start         # sviluppo → http://localhost:4200
npm run build     # produzione → dist/ag-costruzioni/browser
```

Il contenuto di `dist/ag-costruzioni/browser` si pubblica su qualsiasi hosting
statico (Netlify, Vercel, GitHub Pages, Aruba…).

## Dove si cambia cosa

| Cosa                                        | Dove                                                                           |
| ------------------------------------------- | ------------------------------------------------------------------------------ |
| Testi, servizi, recensioni, telefono, orari | `src/app/data/site-data.ts`                                                    |
| **Foto** (sostituire quelle temporanee)     | `public/img/` — sovrascrivi il file mantenendo lo stesso nome (es. `hero.jpg`) |
| Colori e stile                              | `src/styles.scss` (sezione "Design tokens")                                    |
| Titolo e descrizione per Google/social      | `src/index.html`                                                               |
| Sezioni della pagina                        | `src/app/sections/<nome>/`                                                     |

## Note

- Il numero WhatsApp è in `site-data.ts` (`whatsapp: '393887729574'`).
- Le foto attuali sono immagini d'archivio (Unsplash, uso libero) in attesa
  delle foto reali dei cantieri: c'è una piccola nota nella sezione "Lavori"
  da togliere quando le sostituisci.
- Nessun dato utente viene salvato: il messaggio parte dal WhatsApp del visitatore.
# ag-costruzioni
