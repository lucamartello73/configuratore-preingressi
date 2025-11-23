"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ConfigurazionePreingresso } from "@/lib/types";
import { CheckCircle2, ArrowLeft, Send, User } from "lucide-react";

interface StepFinaleProps {
  config: Partial<ConfigurazionePreingresso>;
  updateConfig: (updates: Partial<ConfigurazionePreingresso>) => void;
  prevStep: () => void;
}

export function StepFinale({ config, updateConfig, prevStep }: StepFinaleProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!config.nomeCliente || !config.emailCliente) {
      alert("Compila almeno nome e email per procedere");
      return;
    }

    setIsSubmitting(true);

    // Simulazione invio (qui va integrato Supabase)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Configurazione inviata:", config);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white rounded-2xl shadow-md text-center">
          <CardContent className="pt-12 pb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full">
                <CheckCircle2 className="w-16 h-16 text-[#6AB52B]" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Richiesta Inviata con Successo!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Grazie per aver utilizzato il nostro configuratore.
              <br />
              Riceverai una risposta entro 24-48 ore.
            </p>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700">
                Abbiamo inviato una copia della configurazione a:
                <br />
                <span className="font-semibold text-[#6AB52B]">{config.emailCliente}</span>
              </p>
            </div>
            <Button
              onClick={() => window.location.reload()}
              size="lg"
              className="bg-[#6AB52B] hover:bg-[#5A9823] text-white"
            >
              Crea Nuova Configurazione
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Riepilogo Configurazione */}
      <Card className="bg-white rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Riepilogo Configurazione
          </CardTitle>
          <CardDescription className="text-gray-600">
            Verifica i dettagli della tua struttura personalizzata
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                📐 Dimensioni
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Larghezza: <span className="font-medium">{config.larghezza} cm</span></li>
                <li>Profondità: <span className="font-medium">{config.profondita} cm</span></li>
                <li>Altezza: <span className="font-medium">{config.altezza} cm</span></li>
                <li>Tipologia: <span className="font-medium capitalize">{config.tipologia}</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                🏗️ Struttura
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Materiale: <span className="font-medium capitalize">{config.materiale}</span></li>
                <li>Finitura: <span className="font-medium capitalize">{config.finitura?.replace('_', ' ')}</span></li>
                <li>Coibentato: <span className="font-medium">{config.coibentato ? "Sì" : "No"}</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                🚪 Serramenti
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Finestre: <span className="font-medium">{config.numeroFinestre} - {config.tipoFinestre}</span></li>
                <li>Scuri: <span className="font-medium">{config.scuriEsterni ? "Sì" : "No"}</span></li>
                <li>Porta: <span className="font-medium capitalize">{config.tipoPorta?.replace('_', ' ')}</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                🏠 Copertura
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Tetto: <span className="font-medium capitalize">{config.tipoTetto?.replace('_', ' ')}</span></li>
                <li>Copertura: <span className="font-medium capitalize">{config.tipoCopertura?.replace('_', ' ')}</span></li>
                <li>Grondaie: <span className="font-medium">{config.grondaie ? "Sì" : "No"}</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                📦 Accessori
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pavimento: <span className="font-medium">{config.pavimento ? `Sì (${config.tipoPavimento})` : "No"}</span></li>
                <li>Predisposizione impianti: <span className="font-medium">{config.predisposizioneImpianti ? "Sì" : "No"}</span></li>
                <li>Veranda: <span className="font-medium">{config.veranda ? "Sì" : "No"}</span></li>
                <li>Pensilina: <span className="font-medium">{config.pensilina ? "Sì" : "No"}</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                📍 Installazione
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Provincia: <span className="font-medium">{config.provincia}</span></li>
                <li>Accessibilità: <span className="font-medium capitalize">{config.accessibilita}</span></li>
                <li>Posa inclusa: <span className="font-medium">{config.posaInclusa ? "Sì" : "No"}</span></li>
                <li>Trasporto incluso: <span className="font-medium">{config.trasportoIncluso ? "Sì" : "No"}</span></li>
              </ul>
            </div>
          </div>

          {config.altriOptional && (
            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">Note aggiuntive:</h3>
              <p className="text-sm text-gray-600 italic">{config.altriOptional}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Form Dati Cliente */}
      <Card className="bg-white rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#6AB52B] rounded-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                I Tuoi Dati
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Compila per ricevere il preventivo personalizzato
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nomeCliente" className="text-gray-700 font-medium">
                Nome e Cognome *
              </Label>
              <Input
                id="nomeCliente"
                type="text"
                value={config.nomeCliente || ""}
                onChange={(e) => updateConfig({ nomeCliente: e.target.value })}
                placeholder="Mario Rossi"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emailCliente" className="text-gray-700 font-medium">
                Email *
              </Label>
              <Input
                id="emailCliente"
                type="email"
                value={config.emailCliente || ""}
                onChange={(e) => updateConfig({ emailCliente: e.target.value })}
                placeholder="mario.rossi@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefonoCliente" className="text-gray-700 font-medium">
              Telefono
            </Label>
            <Input
              id="telefonoCliente"
              type="tel"
              value={config.telefonoCliente || ""}
              onChange={(e) => updateConfig({ telefonoCliente: e.target.value })}
              placeholder="+39 123 456 7890"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="noteCliente" className="text-gray-700 font-medium">
              Messaggio o Richieste Particolari
            </Label>
            <Textarea
              id="noteCliente"
              value={config.noteCliente || ""}
              onChange={(e) => updateConfig({ noteCliente: e.target.value })}
              placeholder="Eventuali note aggiuntive o domande..."
              rows={4}
              className="resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={prevStep}
          variant="outline"
          size="lg"
          className="border-gray-300 text-gray-700"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Indietro
        </Button>
        <Button
          onClick={handleSubmit}
          size="lg"
          className="bg-[#6AB52B] hover:bg-[#5A9823] text-white px-8"
          disabled={isSubmitting || !config.nomeCliente || !config.emailCliente}
        >
          {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
          <Send className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
