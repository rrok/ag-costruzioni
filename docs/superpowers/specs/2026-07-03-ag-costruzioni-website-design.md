# Sito web AG Costruzioni — Design

**Data:** 2026-07-03
**Stato:** approvato implicitamente dalla richiesta utente (generazione diretta, contenuti inventati dove mancanti)

## Obiettivo

SPA vetrina, innovativa e professionale, per **AG COSTRUZIONI** (cooperativa edilizia,
Forlimpopoli FC). Nessun backend: il form contatti apre WhatsApp con messaggio
precompilato. Foto temporanee facilmente sostituibili.

## Dati reali (da Google Maps / richiesta utente)

- Nome: AG COSTRUZIONI
- Titolare: Ardian Gjinaj, 30 anni di esperienza, con team di professionisti del settore
- Indirizzo: Via Emilia per Cesena 1315, 47034 Case Lago — Forlimpopoli (FC)
- Telefono / WhatsApp: 388 772 9574 (+39)
- Coordinate: 44.1782652, 12.1472704
- Google: 5,0 ★ (2 recensioni; citazione reale di Valter Elezi)
- Orari: Lun–Sab fino alle 19:00 (inventato ragionevolmente, da confermare)
- Servizi: costruzioni complete, tetti, cappotto termico, ristrutturazioni, fondamenta,
  scavi/movimento terra
- Parco mezzi: escavatori, furgoni, camioncino, muletto

## Stack e architettura

- **Angular** (ultima versione, standalone components, nessun NgModule)
- **Bootstrap 5** via npm (grid + utilities + JS bundle per navbar/collapse)
- **Nessun router**: one-page a sezioni con ancore e smooth scroll — la struttura più
  semplice da manutenere per un sito vetrina
- Contenuti **data-driven**: liste (servizi, mezzi, galleria, recensioni) in
  `src/app/data/site-data.ts` — per aggiornare testi/foto si tocca un solo file
- Immagini in `src/assets/img/` con nomi parlanti (`hero.jpg`, `servizio-tetti.jpg`, …):
  per sostituirle basta sovrascrivere il file con lo stesso nome

## Sezioni (componenti standalone)

1. `header` — navbar sticky con logo testuale e ancore + CTA WhatsApp
2. `hero` — immagine full-screen, claim, CTA "Richiedi preventivo"
3. `services` — card dei 6 servizi
4. `about` — Ardian Gjinaj, 30 anni di esperienza, valori, numeri (esperienza, mezzi, ★)
5. `fleet` — parco mezzi e attrezzature
6. `gallery` — lavori/progetti (placeholder)
7. `testimonials` — recensioni Google (1 reale + inventate verosimili), 5,0 ★
8. `contact` — form (nome, telefono, tipo di lavoro, messaggio) → apre
   `https://wa.me/393887729574?text=<messaggio urlencoded>`; accanto: indirizzo,
   telefono, mappa Google embed
9. `footer` — dati aziendali, link

## Direzione visiva

Professionale/edile premium: sfondo scuro antracite + accento giallo cantiere,
tipografia display decisa, molto spazio. Dettagli definiti con la skill frontend-design.

## Gestione errori / edge case

- Form: validazione minima lato client (nome e messaggio richiesti); il bottone è
  disabilitato finché non valido; nessun dato salvato.
- WhatsApp si apre in nuova scheda (`window.open`), funziona anche su mobile (app).

## Verifica

`ng build` senza errori; controllo visivo desktop + mobile con Playwright;
test manuale del link wa.me generato.
