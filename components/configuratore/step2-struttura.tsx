"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ConfigurazionePreingresso } from "@/lib/types";
import { Building2, ArrowRight, ArrowLeft } from "lucide-react";

interface Step2Props {
  config: Partial<ConfigurazionePreingresso>;
  updateConfig: (updates: Partial<ConfigurazionePreingresso>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function Step2Struttura({ config, updateConfig, nextStep, prevStep }: Step2Props) {
  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#6AB52B] rounded-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Tipologia di Struttura
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Scegli materiali e finiture
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Coibentazione */}
          <div className="space-y-4">
            <Label className="text-gray-700 font-medium">Coibentazione</Label>
            <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
              <Checkbox
                id="coibentato"
                checked={config.coibentato}
                onCheckedChange={(checked) => updateConfig({ coibentato: checked as boolean })}
              />
              <label
                htmlFor="coibentato"
                className="flex-1 cursor-pointer"
              >
                <div className="font-semibold text-gray-800">Struttura Coibentata</div>
                <p className="text-sm text-gray-600">
                  Isolamento termico per utilizzo quattro stagioni
                </p>
              </label>
            </div>
          </div>

          {/* Materiale */}
          <div className="border-t pt-6">
            <Label className="text-gray-700 font-medium mb-4 block">
              Materiale Struttura *
            </Label>
            <RadioGroup
              value={config.materiale}
              onValueChange={(value) => updateConfig({ materiale: value as any })}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.materiale === "legno"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="legno" id="legno" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">Legno Lamellare</span>
                <p className="text-sm text-gray-600">
                  Naturale, resistente e tradizionale
                </p>
              </label>

              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.materiale === "pvc"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="pvc" id="pvc" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">PVC</span>
                <p className="text-sm text-gray-600">
                  Leggero, economico, zero manutenzione
                </p>
              </label>

              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.materiale === "metallo"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="metallo" id="metallo" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">Metallo (Acciaio)</span>
                <p className="text-sm text-gray-600">
                  Robusto, duraturo, moderno
                </p>
              </label>
            </RadioGroup>
          </div>

          {/* Finitura */}
          <div className="border-t pt-6">
            <Label className="text-gray-700 font-medium mb-4 block">
              Finitura Esterna *
            </Label>
            <RadioGroup
              value={config.finitura}
              onValueChange={(value) => updateConfig({ finitura: value as any })}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.finitura === "naturale"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="naturale" id="naturale" />
                <div>
                  <span className="font-semibold text-gray-800 block mb-1">Naturale</span>
                  <p className="text-sm text-gray-600">Legno grezzo non trattato</p>
                </div>
              </label>

              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.finitura === "impregnato"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="impregnato" id="impregnato" />
                <div>
                  <span className="font-semibold text-gray-800 block mb-1">Impregnato</span>
                  <p className="text-sm text-gray-600">Trattamento protettivo trasparente</p>
                </div>
              </label>

              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.finitura === "verniciato"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="verniciato" id="verniciato" />
                <div>
                  <span className="font-semibold text-gray-800 block mb-1">Verniciato</span>
                  <p className="text-sm text-gray-600">Finitura a colore personalizzata</p>
                </div>
              </label>
            </RadioGroup>
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
          onClick={nextStep}
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
