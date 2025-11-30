import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { ConfigurazioneSchema } from "@/lib/validation";
import { sendClientConfirmation, sendAdminNotification } from "@/lib/email";
import { ZodError } from "zod";

/**
 * POST /api/preventivi
 * Crea un nuovo preventivo con validazione, salvataggio DB e invio email
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Parse body
    const body = await request.json();

    // 2. Validazione con Zod
    const validatedConfig = ConfigurazioneSchema.parse(body);

    // 3. Salvataggio su Supabase (se configurato)
    let preventivoId: string | undefined;

    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );

        const { data, error } = await supabase
          .from("preventivi_preingressi")
          .insert([
            {
              // Campi individuali per query facili
              larghezza: validatedConfig.larghezza,
              profondita: validatedConfig.profondita,
              altezza: validatedConfig.altezza,
              tipologia: validatedConfig.tipologia,
              coibentato: validatedConfig.coibentato,
              materiale: validatedConfig.materiale,
              finitura: validatedConfig.finitura,
              numero_finestre: validatedConfig.numeroFinestre,
              tipo_finestre: validatedConfig.tipoFinestre,
              scuri_esterni: validatedConfig.scuriEsterni,
              tipo_porta: validatedConfig.tipoPorta,
              tipo_tetto: validatedConfig.tipoTetto,
              tipo_copertura: validatedConfig.tipoCopertura,
              grondaie: validatedConfig.grondaie,
              pavimento: validatedConfig.pavimento,
              tipo_pavimento: validatedConfig.tipoPavimento,
              predisposizione_impianti: validatedConfig.predisposizioneImpianti,
              veranda: validatedConfig.veranda,
              pensilina: validatedConfig.pensilina,
              altri_optional: validatedConfig.altriOptional,
              provincia: validatedConfig.provincia,
              accessibilita: validatedConfig.accessibilita,
              posa_inclusa: validatedConfig.posaInclusa,
              trasporto_incluso: validatedConfig.trasportoIncluso,
              nome_cliente: validatedConfig.nomeCliente,
              email_cliente: validatedConfig.emailCliente,
              telefono_cliente: validatedConfig.telefonoCliente,
              note_cliente: validatedConfig.noteCliente,

              // JSON completo per flessibilità
              configurazione_json: validatedConfig,

              // Stato iniziale
              stato: "nuovo",
            },
          ])
          .select("id")
          .single();

        if (error) {
          console.error("Errore Supabase:", error);
          // Non blocchiamo il flow se Supabase fallisce
        } else if (data) {
          preventivoId = data.id;
        }
      } catch (supabaseError) {
        console.error("Errore connessione Supabase:", supabaseError);
        // Continuiamo comunque con email
      }
    }

    // 4. Invio email (parallelo per velocità)
    const emailPromises = [];

    // Email cliente (sempre)
    emailPromises.push(
      sendClientConfirmation(validatedConfig, preventivoId).catch((err) => {
        console.error("Errore email cliente:", err);
        return null; // Non blocchiamo se email cliente fallisce
      })
    );

    // Email admin (sempre)
    emailPromises.push(
      sendAdminNotification(validatedConfig, preventivoId).catch((err) => {
        console.error("Errore email admin:", err);
        return null; // Non blocchiamo se email admin fallisce
      })
    );

    const [clientEmailResult, adminEmailResult] = await Promise.allSettled(
      emailPromises
    );

    // 5. Response di successo
    return NextResponse.json(
      {
        success: true,
        message: "Preventivo inviato con successo",
        data: {
          preventivoId,
          emailCliente: clientEmailResult.status === "fulfilled",
          emailAdmin: adminEmailResult.status === "fulfilled",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    // Gestione errori specifici

    // Errore validazione Zod
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Dati non validi",
          details: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Errore parsing JSON
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: "Formato dati non valido",
        },
        { status: 400 }
      );
    }

    // Errore generico
    console.error("Errore API preventivi:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Errore interno del server",
        message:
          error instanceof Error ? error.message : "Errore sconosciuto",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/preventivi
 * Recupera lista preventivi (per admin dashboard - future)
 */
export async function GET(request: NextRequest) {
  try {
    // TODO: Aggiungere autenticazione admin
    // Per ora ritorniamo 501 Not Implemented

    return NextResponse.json(
      {
        success: false,
        error: "Endpoint non ancora implementato",
        message: "Usare dashboard admin per visualizzare preventivi",
      },
      { status: 501 }
    );
  } catch (error) {
    console.error("Errore GET preventivi:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Errore interno del server",
      },
      { status: 500 }
    );
  }
}
