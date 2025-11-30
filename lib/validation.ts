import { z } from "zod";

/**
 * Schema di validazione completo per la configurazione preingresso
 * Validazione server-side con Zod per sicurezza e integrità dati
 */
export const ConfigurazioneSchema = z.object({
  // Step 1: Misure e Struttura Base
  larghezza: z
    .number({
      required_error: "La larghezza è obbligatoria",
      invalid_type_error: "La larghezza deve essere un numero",
    })
    .min(150, "La larghezza minima è 150 cm")
    .max(600, "La larghezza massima è 600 cm"),

  profondita: z
    .number({
      required_error: "La profondità è obbligatoria",
      invalid_type_error: "La profondità deve essere un numero",
    })
    .min(100, "La profondità minima è 100 cm")
    .max(400, "La profondità massima è 400 cm"),

  altezza: z
    .number({
      required_error: "L'altezza è obbligatoria",
      invalid_type_error: "L'altezza deve essere un numero",
    })
    .min(180, "L'altezza minima è 180 cm")
    .max(300, "L'altezza massima è 300 cm"),

  tipologia: z.enum(["indipendente", "addossato"], {
    required_error: "La tipologia è obbligatoria",
    invalid_type_error: "Tipologia non valida",
  }),

  // Step 2: Tipologia Struttura
  coibentato: z.boolean().default(false),

  materiale: z.enum(["legno", "pvc", "metallo"], {
    required_error: "Il materiale è obbligatorio",
    invalid_type_error: "Materiale non valido",
  }),

  finitura: z.enum(["naturale", "impregnato", "verniciato"], {
    required_error: "La finitura è obbligatoria",
    invalid_type_error: "Finitura non valida",
  }),

  // Step 3: Serramenti
  numeroFinestre: z
    .number()
    .min(0, "Il numero di finestre non può essere negativo")
    .max(10, "Numero massimo di finestre: 10")
    .default(0),

  tipoFinestre: z.enum(["vasistas", "battente", "fisse"]).optional(),

  scuriEsterni: z.boolean().default(false),

  tipoPorta: z.enum([
    "singola_cieca",
    "singola_vetro",
    "doppia_cieca",
    "doppia_vetro",
  ], {
    required_error: "Il tipo di porta è obbligatorio",
  }),

  // Step 4: Copertura
  tipoTetto: z.enum(["monofalda", "doppia_falda"], {
    required_error: "Il tipo di tetto è obbligatorio",
  }),

  tipoCopertura: z.enum(["telo_bitumato", "tegola_canadese", "lamiera_grecata"], {
    required_error: "Il tipo di copertura è obbligatorio",
  }),

  grondaie: z.boolean().default(false),

  // Step 5: Accessori
  pavimento: z.boolean().default(false),

  tipoPavimento: z.enum(["legno", "metallo"]).optional(),

  predisposizioneImpianti: z.boolean().default(false),

  veranda: z.boolean().default(false),

  pensilina: z.boolean().default(false),

  altriOptional: z.string().max(1000, "Testo troppo lungo (max 1000 caratteri)").default(""),

  // Step 6: Zona e Posa
  provincia: z
    .string({
      required_error: "La provincia è obbligatoria",
    })
    .min(2, "Provincia non valida")
    .max(50, "Provincia troppo lunga"),

  accessibilita: z.enum(["camion", "muletto", "manuale"], {
    required_error: "L'accessibilità è obbligatoria",
  }),

  posaInclusa: z.boolean().default(false),

  trasportoIncluso: z.boolean().default(false),

  // Dati Cliente
  nomeCliente: z
    .string({
      required_error: "Il nome è obbligatorio",
    })
    .min(2, "Il nome deve contenere almeno 2 caratteri")
    .max(255, "Il nome è troppo lungo"),

  emailCliente: z
    .string({
      required_error: "L'email è obbligatoria",
    })
    .email("Email non valida")
    .max(255, "Email troppo lunga"),

  telefonoCliente: z
    .string()
    .max(50, "Telefono troppo lungo")
    .optional()
    .or(z.literal("")),

  noteCliente: z
    .string()
    .max(2000, "Note troppo lunghe (max 2000 caratteri)")
    .optional()
    .or(z.literal("")),

  // Allegati (future implementation)
  immagini: z.array(z.string().url()).optional(),
})
  // Validazione condizionale: se pavimento = true, tipoPavimento deve essere specificato
  .refine(
    (data) => {
      if (data.pavimento && !data.tipoPavimento) {
        return false;
      }
      return true;
    },
    {
      message: "Specificare il tipo di pavimento se incluso",
      path: ["tipoPavimento"],
    }
  )
  // Validazione: se numeroFinestre > 0, tipoFinestre deve essere specificato
  .refine(
    (data) => {
      if (data.numeroFinestre > 0 && !data.tipoFinestre) {
        return false;
      }
      return true;
    },
    {
      message: "Specificare il tipo di finestre se presenti",
      path: ["tipoFinestre"],
    }
  );

/**
 * Type inference da schema Zod
 */
export type ValidatedConfigurazione = z.infer<typeof ConfigurazioneSchema>;

/**
 * Helper per validazione lato client
 * Ritorna errori formattati per display UI
 */
export function validateConfig(data: unknown) {
  const result = ConfigurazioneSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten(),
    };
  }

  return {
    success: true,
    data: result.data,
  };
}

/**
 * Schema parziale per validazione step-by-step
 * Permette validazione progressiva durante compilazione form
 */
export const Step1Schema = ConfigurazioneSchema.pick({
  larghezza: true,
  profondita: true,
  altezza: true,
  tipologia: true,
});

export const Step2Schema = ConfigurazioneSchema.pick({
  coibentato: true,
  materiale: true,
  finitura: true,
});

export const Step3Schema = ConfigurazioneSchema.pick({
  numeroFinestre: true,
  tipoFinestre: true,
  scuriEsterni: true,
  tipoPorta: true,
});

export const Step4Schema = ConfigurazioneSchema.pick({
  tipoTetto: true,
  tipoCopertura: true,
  grondaie: true,
});

export const Step5Schema = ConfigurazioneSchema.pick({
  pavimento: true,
  tipoPavimento: true,
  predisposizioneImpianti: true,
  veranda: true,
  pensilina: true,
  altriOptional: true,
});

export const Step6Schema = ConfigurazioneSchema.pick({
  provincia: true,
  accessibilita: true,
  posaInclusa: true,
  trasportoIncluso: true,
});

export const ClientDataSchema = ConfigurazioneSchema.pick({
  nomeCliente: true,
  emailCliente: true,
  telefonoCliente: true,
  noteCliente: true,
});
