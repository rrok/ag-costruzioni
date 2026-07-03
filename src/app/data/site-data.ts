/**
 * Tutti i contenuti del sito in un unico file: per aggiornare testi,
 * foto o recensioni si modifica solo questo file.
 * Le immagini vivono in public/img/ — per sostituirne una basta
 * sovrascrivere il file mantenendo lo stesso nome.
 */

export const SITE = {
  nome: 'AG Costruzioni',
  titolare: 'Ardian Gjinaj',
  telefono: '388 772 9574',
  telefonoHref: 'tel:+393887729574',
  /** Numero WhatsApp in formato internazionale, senza + né spazi */
  whatsapp: '393887729574',
  indirizzo: 'Via Emilia per Cesena 1315, 47034 Forlimpopoli (FC)',
  zona: 'Forlì-Cesena e tutta la Romagna',
  orari: 'Lun – Sab · 7:30 – 19:00',
  mapsUrl: 'https://maps.google.com/?cid=8853066620519582583',
  mapsEmbed:
    'https://maps.google.com/maps?q=44.1782652,12.1472704&z=15&output=embed&hl=it'
};

export interface Servizio {
  titolo: string;
  descrizione: string;
  punti: string[];
  img: string;
  alt: string;
}

export const SERVIZI: Servizio[] = [
  {
    titolo: 'Nuove costruzioni',
    descrizione:
      "Dal progetto alla consegna delle chiavi: struttura, impianti e finiture seguiti da un'unica squadra, senza intermediari.",
    punti: ['Case unifamiliari e bifamiliari', 'Capannoni e annessi', 'Chiavi in mano'],
    img: 'img/servizio-nuove-costruzioni.jpg',
    alt: 'Villa moderna di nuova costruzione'
  },
  {
    titolo: 'Tetti e coperture',
    descrizione:
      'Rifacimento completo o riparazione: legno, coppi, guaine e lattoneria. Coperture ventilate e isolate per consumare meno.',
    punti: ['Rifacimento e riparazioni', 'Coperture ventilate', 'Lattoneria e linee vita'],
    img: 'img/servizio-tetti.jpg',
    alt: 'Tetto con coppi appena rifatto'
  },
  {
    titolo: 'Cappotto termico',
    descrizione:
      'Isolamento a cappotto per tagliare le bollette e dare una nuova faccia alla casa. Ponteggi e pratiche li gestiamo noi.',
    punti: ['Facciate e frontalini', 'Isolamento esterno e interno', 'Finiture ai silicati'],
    img: 'img/servizio-cappotto.jpg',
    alt: 'Facciata di edificio riqualificato'
  },
  {
    titolo: 'Ristrutturazioni',
    descrizione:
      'Ristrutturazioni complete di case, bagni e locali: demolizioni, impianti, massetti, pavimenti e finiture, chiavi in mano.',
    punti: ['Appartamenti e case', 'Bagni e cucine', 'Locali commerciali e officine'],
    img: 'img/servizio-ristrutturazioni.jpg',
    alt: 'Soggiorno moderno appena ristrutturato'
  },
  {
    titolo: 'Fondamenta e cemento armato',
    descrizione:
      "Fondamenta, platee, vespai e murature portanti eseguite a regola d'arte, con ferro e getti seguiti direttamente in cantiere.",
    punti: ['Platee e plinti', 'Vespai aerati', 'Murature portanti'],
    img: 'img/servizio-fondamenta.jpg',
    alt: 'Posa del ferro per una platea di fondazione'
  },
  {
    titolo: 'Scavi e movimento terra',
    descrizione:
      'Con escavatori e mezzi nostri eseguiamo scavi, sbancamenti, allacci fognari e sistemazioni esterne senza attese di noleggi.',
    punti: ['Scavi di fondazione', 'Allacci e fognature', 'Sistemazioni esterne'],
    img: 'img/servizio-scavi.jpg',
    alt: 'Escavatori al lavoro in un cantiere'
  }
];

export interface Mezzo {
  nome: string;
  descrizione: string;
  icona: 'escavatore' | 'furgone' | 'camioncino' | 'muletto';
}

export const MEZZI: Mezzo[] = [
  {
    nome: 'Escavatori',
    descrizione: 'Scavi di fondazione, sbancamenti e demolizioni',
    icona: 'escavatore'
  },
  {
    nome: 'Furgoni attrezzati',
    descrizione: 'Squadre operative con tutta l’attrezzatura a bordo',
    icona: 'furgone'
  },
  {
    nome: 'Camioncino ribaltabile',
    descrizione: 'Trasporto materiali e smaltimento macerie',
    icona: 'camioncino'
  },
  {
    nome: 'Muletto',
    descrizione: 'Movimentazione di carichi e pallet in cantiere',
    icona: 'muletto'
  }
];

export interface Lavoro {
  titolo: string;
  categoria: string;
  img: string;
  alt: string;
}

export const LAVORI: Lavoro[] = [
  {
    titolo: 'Villa unifamiliare',
    categoria: 'Nuova costruzione',
    img: 'img/lavoro-1.jpg',
    alt: 'Villa moderna con giardino al tramonto'
  },
  {
    titolo: 'Zona giorno open space',
    categoria: 'Ristrutturazione completa',
    img: 'img/lavoro-2.jpg',
    alt: 'Soggiorno ristrutturato con scala in legno'
  },
  {
    titolo: 'Mansarda in legno',
    categoria: 'Tetto e sottotetto',
    img: 'img/lavoro-3.jpg',
    alt: 'Mansarda con travi in legno a vista'
  },
  {
    titolo: 'Carpenteria su misura',
    categoria: 'Lavorazioni in cantiere',
    img: 'img/lavoro-4.jpg',
    alt: 'Taglio di travi in legno con sega circolare'
  },
  {
    titolo: 'Edificio direzionale',
    categoria: 'Facciata e involucro',
    img: 'img/lavoro-5.jpg',
    alt: 'Edificio moderno con facciata bianca'
  },
  {
    titolo: 'Portico e esterni',
    categoria: 'Riqualificazione',
    img: 'img/lavoro-6.jpg',
    alt: 'Portico di casa riqualificato'
  }
];

export interface Recensione {
  autore: string;
  testo: string;
  fonte: string;
}

export const RECENSIONI: Recensione[] = [
  {
    autore: 'Valter Elezi',
    testo:
      'Professionale, disponibile e attrezzato per qualsiasi tipologia di lavoro. Preventivo quasi immediato e molto corretto. Ha trasformato la mia officina come se fosse un ospedale: lo consiglio per qualsiasi lavoro.',
    fonte: 'Recensione Google'
  },
  {
    autore: 'Famiglia R. — Forlimpopoli',
    testo:
      'Hanno rifatto tetto e cappotto della nostra casa: cantiere sempre pulito, tempi rispettati e prezzo come da preventivo.',
    fonte: 'Cliente'
  },
  {
    autore: 'M. Casadei — Forlì',
    testo:
      'Dallo scavo alle finiture hanno fatto tutto loro, con i loro mezzi. Un solo interlocutore per tutto il cantiere: una tranquillità.',
    fonte: 'Cliente'
  }
];

/** Voci del menu a tendina "Tipo di lavoro" nel form contatti */
export const TIPI_LAVORO = [
  'Tetto o copertura',
  'Cappotto termico',
  'Ristrutturazione',
  'Nuova costruzione',
  'Fondamenta o scavi',
  'Altro'
];
