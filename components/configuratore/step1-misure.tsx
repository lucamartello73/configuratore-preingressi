"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ConfigurazionePreingresso } from "@/lib/types";
import { Home, Ruler, ArrowRight } from "lucide-react";

interface Step1Props {
  config: Partial<ConfigurazionePreingresso>;
  updateConfig: (updates: Partial<ConfigurazionePreingresso>) => void;
  nextStep: () => void;
}

export function Step1Misure({ config, updateConfig, nextStep }: Step1Props) {
  const handleSubmit = () => {
    if (config.larghezza && config.profondita && config.altezza) {
      nextStep();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#6AB52B] rounded-lg">
              <Ruler className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Misure e Struttura Base
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Definisci le dimensioni del tuo preingresso
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Dimensioni */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="larghezza" className="text-gray-700 font-medium">
                Larghezza (cm) *
              </Label>
              <Input
                id="larghezza"
                type="number"
                value={config.larghezza || ""}
                onChange={(e) => updateConfig({ larghezza: parseInt(e.target.value) || 0 })}
                placeholder="300"
                min={150}
                max={600}
                className="text-lg"
              />
              <p className="text-xs text-gray-500">Min: 150cm - Max: 600cm</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="profondita" className="text-gray-700 font-medium">
                Profondità (cm) *
              </Label>
              <Input
                id="profondita"
                type="number"
                value={config.profondita || ""}
                onChange={(e) => updateConfig({ profondita: parseInt(e.target.value) || 0 })}
                placeholder="200"
                min={100}
                max={400}
                className="text-lg"
              />
              <p className="text-xs text-gray-500">Min: 100cm - Max: 400cm</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="altezza" className="text-gray-700 font-medium">
                Altezza interna (cm) *
              </Label>
              <Input
                id="altezza"
                type="number"
                value={config.altezza || ""}
                onChange={(e) => updateConfig({ altezza: parseInt(e.target.value) || 0 })}
                placeholder="220"
                min={200}
                max={300}
                className="text-lg"
              />
              <p className="text-xs text-gray-500">Min: 200cm - Max: 300cm</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <Label className="text-gray-700 font-medium mb-4 block">
              Tipo di installazione *
            </Label>
            <RadioGroup
              value={config.tipologia}
              onValueChange={(value) => updateConfig({ tipologia: value as "indipendente" | "addossato" })}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipologia === "indipendente"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="indipendente" id="indipendente" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Home className="w-5 h-5 text-[#6AB52B]" />
                    <span className="font-semibold text-gray-800">Struttura Indipendente</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Modulo autoportante completamente autonomo
                  </p>
                </div>
              </label>

              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipologia === "addossato"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="addossato" id="addossato" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Home className="w-5 h-5 text-[#6AB52B]" />
                    <span className="font-semibold text-gray-800">Addossato a Casetta</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Si appoggia a una struttura esistente
                  </p>
                </div>
              </label>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <Card className="bg-blue-50 border-blue-200 rounded-2xl">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Ruler className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Consigli sulle misure</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Per un preingresso standard, consigliamo 300x200cm</li>
                <li>• L'altezza interna minima consigliata è 220cm</li>
                <li>• Considera lo spazio necessario per l'apertura della porta</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          size="lg"
          className="bg-[#6AB52B] hover:bg-[#5A9823] text-white px-8"
        >
          Avanti
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
