import { Resend } from "resend";
import { ValidatedConfigurazione } from "./validation";

// Initialize Resend only if API key is available (not during build time)
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Email di conferma al cliente
 * Inviata dopo submit configurazione
 */
export async function sendClientConfirmation(
  config: ValidatedConfigurazione,
  preventivoId?: string
) {
  // Check if Resend is configured
  if (!resend) {
    console.warn("Resend API key not configured. Skipping email send.");
    throw new Error("Email service not configured. Please add RESEND_API_KEY environment variable.");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Martello1930 <preventivi@martello1930.net>",
      to: [config.emailCliente],
      subject: "✅ Conferma Richiesta Preventivo - Martello1930",
      html: generateClientEmailHTML(config, preventivoId),
      text: generateClientEmailText(config, preventivoId),
    });

    if (error) {
      console.error("Errore invio email cliente:", error);
      throw new Error(`Email cliente fallita: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Errore invio email cliente:", error);
    throw error;
  }
}

/**
 * Email di notifica all'admin
 * Inviata dopo submit configurazione con tutti i dettagli
 */
export async function sendAdminNotification(
  config: ValidatedConfigurazione,
  preventivoId?: string
) {
  // Check if Resend is configured
  if (!resend) {
    console.warn("Resend API key not configured. Skipping email send.");
    throw new Error("Email service not configured. Please add RESEND_API_KEY environment variable.");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Configuratore <sistema@martello1930.net>",
      to: ["soluzioni@martello1930.net"],
      subject: `🆕 Nuovo Preventivo - ${config.nomeCliente} (${config.provincia})`,
      html: generateAdminEmailHTML(config, preventivoId),
      text: generateAdminEmailText(config, preventivoId),
    });

    if (error) {
      console.error("Errore invio email admin:", error);
      throw new Error(`Email admin fallita: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Errore invio email admin:", error);
    throw error;
  }
}

/**
 * Template HTML email cliente
 */
function generateClientEmailHTML(
  config: ValidatedConfigurazione,
  preventivoId?: string
): string {
  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Conferma Richiesta Preventivo</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #6AB52B 0%, #5A9823 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="margin: 0; font-size: 28px; font-weight: bold;">MARTELLO1930</h1>
    <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Artigianato dal 1930</p>
  </div>
  
  <!-- Body -->
  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    
    <h2 style="color: #6AB52B; margin-top: 0;">Grazie per la tua richiesta!</h2>
    
    <p style="font-size: 16px; color: #4b5563;">
      Caro/a <strong>${config.nomeCliente}</strong>,
    </p>
    
    <p style="font-size: 16px; color: #4b5563;">
      Abbiamo ricevuto correttamente la tua configurazione per un preingresso/casetta personalizzato.
      ${preventivoId ? `<br><small style="color: #9ca3af;">ID Richiesta: <code>${preventivoId}</code></small>` : ""}
    </p>
    
    <!-- Riepilogo Configurazione -->
    <div style="background: #f9fafb; border-left: 4px solid #6AB52B; padding: 20px; margin: 25px 0; border-radius: 5px;">
      <h3 style="margin-top: 0; color: #1f2937; font-size: 18px;">📋 Riepilogo Configurazione</h3>
      
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; width: 50%;"><strong>Dimensioni:</strong></td>
          <td style="padding: 8px 0; color: #1f2937;">${config.larghezza} × ${config.profondita} × ${config.altezza} cm</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;"><strong>Tipologia:</strong></td>
          <td style="padding: 8px 0; color: #1f2937; text-transform: capitalize;">${config.tipologia}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;"><strong>Materiale:</strong></td>
          <td style="padding: 8px 0; color: #1f2937; text-transform: capitalize;">${config.materiale}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;"><strong>Finitura:</strong></td>
          <td style="padding: 8px 0; color: #1f2937; text-transform: capitalize;">${config.finitura}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;"><strong>Coibentato:</strong></td>
          <td style="padding: 8px 0; color: #1f2937;">${config.coibentato ? "✅ Sì" : "❌ No"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;"><strong>Provincia:</strong></td>
          <td style="padding: 8px 0; color: #1f2937;">${config.provincia}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;"><strong>Trasporto:</strong></td>
          <td style="padding: 8px 0; color: #1f2937;">${config.trasportoIncluso ? "✅ Incluso" : "❌ Non incluso"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;"><strong>Posa:</strong></td>
          <td style="padding: 8px 0; color: #1f2937;">${config.posaInclusa ? "✅ Inclusa" : "❌ Non inclusa"}</td>
        </tr>
      </table>
    </div>
    
    <!-- Info Box -->
    <div style="background: #dbeafe; border: 1px solid #93c5fd; border-radius: 8px; padding: 15px; margin: 25px 0;">
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        <strong>⏱️ Tempistiche:</strong> Ti risponderemo entro <strong>24-48 ore</strong> con un preventivo dettagliato e personalizzato.
      </p>
    </div>
    
    <p style="font-size: 16px; color: #4b5563;">
      Nel frattempo, se hai domande o vuoi modificare la configurazione, non esitare a contattarci.
    </p>
    
    <!-- CTA Button -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="tel:+390185167566" style="display: inline-block; background: #6AB52B; color: white; text-decoration: none; padding: 14px 30px; border-radius: 8px; font-weight: bold; font-size: 16px;">
        📞 Chiamaci: +39 0185 167566
      </a>
    </div>
    
    <p style="font-size: 16px; color: #4b5563;">
      Cordiali saluti,<br>
      <strong style="color: #6AB52B;">Il team Martello1930</strong>
    </p>
    
  </div>
  
  <!-- Footer -->
  <div style="background: #f3f4f6; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none;">
    <p style="margin: 0; font-size: 14px; color: #6b7280;">
      <strong>MARTELLO1930</strong><br>
      Tel: +39 0185 167566<br>
      Email: soluzioni@martello1930.net<br>
      Web: <a href="https://www.martello1930.net" style="color: #6AB52B; text-decoration: none;">www.martello1930.net</a>
    </p>
    <p style="margin: 15px 0 0 0; font-size: 12px; color: #9ca3af;">
      © ${new Date().getFullYear()} Martello1930 - Tutti i diritti riservati
    </p>
  </div>
  
</body>
</html>
  `;
}

/**
 * Template plain text email cliente
 */
function generateClientEmailText(
  config: ValidatedConfigurazione,
  preventivoId?: string
): string {
  return `
MARTELLO1930 - Conferma Richiesta Preventivo

Caro/a ${config.nomeCliente},

Abbiamo ricevuto correttamente la tua configurazione per un preingresso/casetta personalizzato.
${preventivoId ? `ID Richiesta: ${preventivoId}` : ""}

RIEPILOGO CONFIGURAZIONE:
- Dimensioni: ${config.larghezza} × ${config.profondita} × ${config.altezza} cm
- Tipologia: ${config.tipologia}
- Materiale: ${config.materiale}
- Finitura: ${config.finitura}
- Coibentato: ${config.coibentato ? "Sì" : "No"}
- Provincia: ${config.provincia}
- Trasporto: ${config.trasportoIncluso ? "Incluso" : "Non incluso"}
- Posa: ${config.posaInclusa ? "Inclusa" : "Non inclusa"}

Ti risponderemo entro 24-48 ore con un preventivo dettagliato.

Per informazioni:
Tel: +39 0185 167566
Email: soluzioni@martello1930.net
Web: www.martello1930.net

Cordiali saluti,
Il team Martello1930
  `;
}

/**
 * Template HTML email admin
 */
function generateAdminEmailHTML(
  config: ValidatedConfigurazione,
  preventivoId?: string
): string {
  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuovo Preventivo</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px; background: #f9fafb;">
  
  <!-- Header Alert -->
  <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
    <p style="margin: 0; color: #92400e; font-weight: bold;">🆕 NUOVA RICHIESTA PREVENTIVO</p>
  </div>
  
  <!-- Main Card -->
  <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    
    <h1 style="color: #1f2937; margin-top: 0; font-size: 24px;">Nuovo Preventivo Ricevuto</h1>
    
    ${preventivoId ? `<p style="color: #6b7280; font-size: 14px;">ID: <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 3px;">${preventivoId}</code></p>` : ""}
    
    <!-- Dati Cliente -->
    <div style="background: #dbeafe; border-radius: 8px; padding: 20px; margin: 20px 0;">
      <h2 style="color: #1e40af; margin-top: 0; font-size: 18px;">👤 Dati Cliente</h2>
      <table style="width: 100%; font-size: 15px;">
        <tr>
          <td style="padding: 5px 0; color: #4b5563; font-weight: bold;">Nome:</td>
          <td style="padding: 5px 0; color: #1f2937;">${config.nomeCliente}</td>
        </tr>
        <tr>
          <td style="padding: 5px 0; color: #4b5563; font-weight: bold;">Email:</td>
          <td style="padding: 5px 0; color: #1f2937;">
            <a href="mailto:${config.emailCliente}" style="color: #2563eb; text-decoration: none;">${config.emailCliente}</a>
          </td>
        </tr>
        ${
          config.telefonoCliente
            ? `<tr>
          <td style="padding: 5px 0; color: #4b5563; font-weight: bold;">Telefono:</td>
          <td style="padding: 5px 0; color: #1f2937;">
            <a href="tel:${config.telefonoCliente}" style="color: #2563eb; text-decoration: none;">${config.telefonoCliente}</a>
          </td>
        </tr>`
            : ""
        }
      </table>
    </div>
    
    <!-- Configurazione Dettagliata -->
    <div style="background: #f0fdf4; border-radius: 8px; padding: 20px; margin: 20px 0;">
      <h2 style="color: #166534; margin-top: 0; font-size: 18px;">📐 Configurazione Struttura</h2>
      
      <h3 style="color: #4b5563; font-size: 16px; margin: 15px 0 10px 0;">Dimensioni e Base</h3>
      <ul style="color: #1f2937; margin: 5px 0; padding-left: 20px;">
        <li>Larghezza: <strong>${config.larghezza} cm</strong></li>
        <li>Profondità: <strong>${config.profondita} cm</strong></li>
        <li>Altezza: <strong>${config.altezza} cm</strong></li>
        <li>Tipologia: <strong style="text-transform: capitalize;">${config.tipologia}</strong></li>
      </ul>
      
      <h3 style="color: #4b5563; font-size: 16px; margin: 15px 0 10px 0;">Materiali e Struttura</h3>
      <ul style="color: #1f2937; margin: 5px 0; padding-left: 20px;">
        <li>Materiale: <strong style="text-transform: capitalize;">${config.materiale}</strong></li>
        <li>Finitura: <strong style="text-transform: capitalize;">${config.finitura}</strong></li>
        <li>Coibentato: <strong>${config.coibentato ? "✅ Sì" : "❌ No"}</strong></li>
      </ul>
      
      <h3 style="color: #4b5563; font-size: 16px; margin: 15px 0 10px 0;">Serramenti</h3>
      <ul style="color: #1f2937; margin: 5px 0; padding-left: 20px;">
        <li>Finestre: <strong>${config.numeroFinestre} ${config.tipoFinestre ? `(${config.tipoFinestre})` : ""}</strong></li>
        <li>Scuri esterni: <strong>${config.scuriEsterni ? "✅ Sì" : "❌ No"}</strong></li>
        <li>Porta: <strong style="text-transform: capitalize;">${config.tipoPorta.replace(/_/g, " ")}</strong></li>
      </ul>
      
      <h3 style="color: #4b5563; font-size: 16px; margin: 15px 0 10px 0;">Copertura</h3>
      <ul style="color: #1f2937; margin: 5px 0; padding-left: 20px;">
        <li>Tetto: <strong style="text-transform: capitalize;">${config.tipoTetto.replace(/_/g, " ")}</strong></li>
        <li>Copertura: <strong style="text-transform: capitalize;">${config.tipoCopertura.replace(/_/g, " ")}</strong></li>
        <li>Grondaie: <strong>${config.grondaie ? "✅ Sì" : "❌ No"}</strong></li>
      </ul>
      
      <h3 style="color: #4b5563; font-size: 16px; margin: 15px 0 10px 0;">Accessori Optional</h3>
      <ul style="color: #1f2937; margin: 5px 0; padding-left: 20px;">
        <li>Pavimento: <strong>${config.pavimento ? `✅ Sì (${config.tipoPavimento})` : "❌ No"}</strong></li>
        <li>Predisposizione impianti: <strong>${config.predisposizioneImpianti ? "✅ Sì" : "❌ No"}</strong></li>
        <li>Veranda: <strong>${config.veranda ? "✅ Sì" : "❌ No"}</strong></li>
        <li>Pensilina: <strong>${config.pensilina ? "✅ Sì" : "❌ No"}</strong></li>
      </ul>
      
      ${
        config.altriOptional
          ? `<div style="background: white; border: 1px solid #d1d5db; padding: 10px; margin-top: 10px; border-radius: 5px;">
        <strong style="color: #4b5563;">Note accessori:</strong><br>
        <span style="color: #1f2937;">${config.altriOptional}</span>
      </div>`
          : ""
      }
    </div>
    
    <!-- Logistica -->
    <div style="background: #fef3c7; border-radius: 8px; padding: 20px; margin: 20px 0;">
      <h2 style="color: #92400e; margin-top: 0; font-size: 18px;">📍 Logistica e Installazione</h2>
      <ul style="color: #1f2937; margin: 5px 0; padding-left: 20px;">
        <li>Provincia: <strong>${config.provincia}</strong></li>
        <li>Accessibilità: <strong style="text-transform: capitalize;">${config.accessibilita}</strong></li>
        <li>Trasporto: <strong>${config.trasportoIncluso ? "✅ Incluso" : "❌ Non richiesto"}</strong></li>
        <li>Posa in opera: <strong>${config.posaInclusa ? "✅ Inclusa" : "❌ Non richiesta"}</strong></li>
      </ul>
    </div>
    
    ${
      config.noteCliente
        ? `<div style="background: #f3f4f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
      <h3 style="color: #4b5563; margin-top: 0; font-size: 16px;">💬 Note Cliente</h3>
      <p style="color: #1f2937; margin: 5px 0; font-style: italic;">"${config.noteCliente}"</p>
    </div>`
        : ""
    }
    
    <!-- CTA -->
    <div style="background: #6AB52B; color: white; padding: 20px; text-align: center; border-radius: 8px; margin: 25px 0;">
      <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">⏰ Azione Richiesta</p>
      <p style="margin: 0; font-size: 14px; opacity: 0.9;">Contattare il cliente entro 24-48 ore con un preventivo dettagliato</p>
    </div>
    
    <!-- JSON Data (per debug/import) -->
    <details style="margin-top: 20px;">
      <summary style="color: #6b7280; cursor: pointer; font-size: 14px;">📋 Dati JSON (per import)</summary>
      <pre style="background: #1f2937; color: #10b981; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 12px; margin-top: 10px;">${JSON.stringify(config, null, 2)}</pre>
    </details>
    
  </div>
  
  <!-- Footer -->
  <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
    <p style="margin: 0;">Questa email è stata generata automaticamente dal Configuratore Preingressi Martello1930</p>
    <p style="margin: 5px 0 0 0;">Data: ${new Date().toLocaleString("it-IT")}</p>
  </div>
  
</body>
</html>
  `;
}

/**
 * Template plain text email admin
 */
function generateAdminEmailText(
  config: ValidatedConfigurazione,
  preventivoId?: string
): string {
  return `
===========================================
NUOVO PREVENTIVO RICEVUTO
===========================================
${preventivoId ? `ID: ${preventivoId}\n` : ""}
Data: ${new Date().toLocaleString("it-IT")}

--- DATI CLIENTE ---
Nome: ${config.nomeCliente}
Email: ${config.emailCliente}
${config.telefonoCliente ? `Telefono: ${config.telefonoCliente}` : ""}

--- CONFIGURAZIONE ---

Dimensioni:
- Larghezza: ${config.larghezza} cm
- Profondità: ${config.profondita} cm
- Altezza: ${config.altezza} cm
- Tipologia: ${config.tipologia}

Materiali:
- Materiale: ${config.materiale}
- Finitura: ${config.finitura}
- Coibentato: ${config.coibentato ? "Sì" : "No"}

Serramenti:
- Finestre: ${config.numeroFinestre} ${config.tipoFinestre ? `(${config.tipoFinestre})` : ""}
- Scuri: ${config.scuriEsterni ? "Sì" : "No"}
- Porta: ${config.tipoPorta}

Copertura:
- Tetto: ${config.tipoTetto}
- Copertura: ${config.tipoCopertura}
- Grondaie: ${config.grondaie ? "Sì" : "No"}

Accessori:
- Pavimento: ${config.pavimento ? `Sì (${config.tipoPavimento})` : "No"}
- Predisposizione impianti: ${config.predisposizioneImpianti ? "Sì" : "No"}
- Veranda: ${config.veranda ? "Sì" : "No"}
- Pensilina: ${config.pensilina ? "Sì" : "No"}
${config.altriOptional ? `- Note: ${config.altriOptional}` : ""}

Logistica:
- Provincia: ${config.provincia}
- Accessibilità: ${config.accessibilita}
- Trasporto incluso: ${config.trasportoIncluso ? "Sì" : "No"}
- Posa inclusa: ${config.posaInclusa ? "Sì" : "No"}

${config.noteCliente ? `\n--- NOTE CLIENTE ---\n${config.noteCliente}\n` : ""}

===========================================
AZIONE RICHIESTA: Contattare cliente entro 24-48h
===========================================

JSON Data:
${JSON.stringify(config, null, 2)}
  `;
}
