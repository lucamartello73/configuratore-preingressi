export interface ConfigurazionePreingresso {
  // Step 1: Misure e Struttura
  larghezza: number;
  profondita: number;
  altezza: number;
  tipologia: "indipendente" | "addossato";

  // Step 2: Tipologia Struttura
  coibentato: boolean;
  materiale: "legno" | "pvc" | "metallo";
  finitura: "naturale" | "impregnato" | "verniciato";

  // Step 3: Serramenti
  numeroFinestre: number;
  tipoFinestre: "vasistas" | "battente" | "fisse";
  scuriEsterni: boolean;
  tipoPorta: "singola_cieca" | "singola_vetro" | "doppia_cieca" | "doppia_vetro";

  // Step 4: Copertura
  tipoTetto: "monofalda" | "doppia_falda";
  tipoCopertura: "telo_bitumato" | "tegola_canadese" | "lamiera_grecata";
  grondaie: boolean;

  // Step 5: Accessori
  pavimento: boolean;
  tipoPavimento?: "legno" | "metallo";
  predisposizioneImpianti: boolean;
  veranda: boolean;
  pensilina: boolean;
  altriOptional: string;

  // Step 6: Zona e Posa
  provincia: string;
  accessibilita: "camion" | "muletto" | "manuale";
  posaInclusa: boolean;
  trasportoIncluso: boolean;

  // Dati cliente
  nomeCliente?: string;
  emailCliente?: string;
  telefonoCliente?: string;
  noteCliente?: string;

  // Allegati
  immagini?: string[];
}

export interface PreventivoDB extends ConfigurazionePreingresso {
  id: string;
  created_at: string;
  stato: "nuovo" | "in_lavorazione" | "confermato" | "archiviato";
  configurazione_json: Record<string, any>;
  note_admin?: string;
}
