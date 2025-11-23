"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ConfigurazionePreingresso } from "@/lib/types";
import { MapPin, ArrowRight, ArrowLeft } from "lucide-react";

interface Step6Props {
  config: Partial<ConfigurazionePreingresso>;
  updateConfig: (updates: Partial<ConfigurazionePreingresso>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function Step6Zona({ config, updateConfig, nextStep, prevStep }: Step6Props) {
  const handleSubmit = () => {
    if (config.provincia) {
      nextStep();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#6AB52B] rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Zona di Installazione e Posa
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Informazioni per logistica e montaggio
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Provincia */}
          <div className="space-y-2">
            <Label htmlFor="provincia" className="text-gray-700 font-medium">
              Provincia di Installazione *
            </Label>
            <Input
              id="provincia"
              type="text"
              value={config.provincia || ""}
              onChange={(e) => updateConfig({ provincia: e.target.value })}
              placeholder="Es: Genova, Milano, Roma..."
              className="text-lg"
            />
            <p className="text-xs text-gray-500">
              Necessario per calcolo trasporto e verifica normative locali
            </p>
          </div>

          {/* Accessibilità */}
          <div className="border-t pt-6">
            <Label className="text-gray-700 font-medium mb-4 block">
              Accessibilità del Sito *
            </Label>
            <RadioGroup
              value={config.accessibilita}
              onValueChange={(value) => updateConfig({ accessibilita: value as any })}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.accessibilita === "camion"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="camion" id="camion" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">Camion</span>
                <p className="text-sm text-gray-600">
                  Accesso diretto con mezzi pesanti
                </p>
              </label>

              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.accessibilita === "muletto"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="muletto" id="muletto" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">Muletto</span>
                <p className="text-sm text-gray-600">
                  Necessario sollevatore o carrello elevatore
                </p>
              </label>

              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.accessibilita === "manuale"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="manuale" id="manuale" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">Manuale</span>
                <p className="text-sm text-gray-600">
                  Solo trasporto e montaggio a mano
                </p>
              </label>
            </RadioGroup>
          </div>

          {/* Servizi Aggiuntivi */}
          <div className="border-t pt-6 space-y-4">
            <Label className="text-gray-700 font-medium block">Servizi Inclusi</Label>

            <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
              <Checkbox
                id="posaInclusa"
                checked={config.posaInclusa}
                onCheckedChange={(checked) => updateConfig({ posaInclusa: checked as boolean })}
              />
              <label htmlFor="posaInclusa" className="flex-1 cursor-pointer">
                <div className="font-semibold text-gray-800">Posa in Opera</div>
                <p className="text-sm text-gray-600">
                  Montaggio completo da parte dei nostri tecnici
                </p>
              </label>
            </div>

            <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
              <Checkbox
                id="trasportoIncluso"
                checked={config.trasportoIncluso}
                onCheckedChange={(checked) => updateConfig({ trasportoIncluso: checked as boolean })}
              />
              <label htmlFor="trasportoIncluso" className="flex-1 cursor-pointer">
                <div className="font-semibold text-gray-800">Trasporto Incluso</div>
                <p className="text-sm text-gray-600">
                  Consegna della struttura fino al sito
                </p>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <Card className="bg-green-50 border-green-200 rounded-2xl">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Informazioni logistiche</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Il trasporto è calcolato in base alla distanza dal nostro deposito</li>
                <li>• La posa in opera include anche il collaudo finale</li>
                <li>• Per siti difficili, consigliamo un sopralluogo preventivo</li>
              </ul>
            </div>
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
          disabled={!config.provincia}
        >
          Avanti
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
