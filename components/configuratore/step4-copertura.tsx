"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ConfigurazionePreingresso } from "@/lib/types";
import { Warehouse, ArrowRight, ArrowLeft } from "lucide-react";

interface Step4Props {
  config: Partial<ConfigurazionePreingresso>;
  updateConfig: (updates: Partial<ConfigurazionePreingresso>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function Step4Copertura({ config, updateConfig, nextStep, prevStep }: Step4Props) {
  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#6AB52B] rounded-lg">
              <Warehouse className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Copertura e Grondaie
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Scegli il tipo di tetto e protezioni
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tipo Tetto */}
          <div className="space-y-4">
            <Label className="text-gray-700 font-medium mb-4 block">
              Tipologia Tetto *
            </Label>
            <RadioGroup
              value={config.tipoTetto}
              onValueChange={(value) => updateConfig({ tipoTetto: value as any })}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <label
                className={`flex flex-col border-2 rounded-xl p-6 cursor-pointer transition ${
                  config.tipoTetto === "monofalda"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="monofalda" id="monofalda" className="mb-3" />
                <span className="font-semibold text-gray-800 text-lg mb-2">Monofalda</span>
                <p className="text-sm text-gray-600">
                  Pendenza unica, ideale per addossati. Deflusso acqua ottimale.
                </p>
              </label>

              <label
                className={`flex flex-col border-2 rounded-xl p-6 cursor-pointer transition ${
                  config.tipoTetto === "doppia_falda"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="doppia_falda" id="doppia_falda" className="mb-3" />
                <span className="font-semibold text-gray-800 text-lg mb-2">Doppia Falda</span>
                <p className="text-sm text-gray-600">
                  Tetto a capanna classico, maggior volume interno e estetica tradizionale.
                </p>
              </label>
            </RadioGroup>
          </div>

          {/* Tipo Copertura */}
          <div className="border-t pt-6">
            <Label className="text-gray-700 font-medium mb-4 block">
              Materiale Copertura *
            </Label>
            <RadioGroup
              value={config.tipoCopertura}
              onValueChange={(value) => updateConfig({ tipoCopertura: value as any })}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipoCopertura === "telo_bitumato"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="telo_bitumato" id="telo_bitumato" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">Telo Bitumato</span>
                <p className="text-sm text-gray-600">Economico e impermeabile</p>
              </label>

              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipoCopertura === "tegola_canadese"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="tegola_canadese" id="tegola_canadese" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">Tegola Canadese</span>
                <p className="text-sm text-gray-600">Estetica e durata media</p>
              </label>

              <label
                className={`flex flex-col border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipoCopertura === "lamiera_grecata"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="lamiera_grecata" id="lamiera_grecata" className="mb-2" />
                <span className="font-semibold text-gray-800 mb-1">Lamiera Grecata</span>
                <p className="text-sm text-gray-600">Robusta e durevole</p>
              </label>
            </RadioGroup>
          </div>

          {/* Grondaie */}
          <div className="border-t pt-6">
            <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
              <Checkbox
                id="grondaie"
                checked={config.grondaie}
                onCheckedChange={(checked) => updateConfig({ grondaie: checked as boolean })}
              />
              <label htmlFor="grondaie" className="flex-1 cursor-pointer">
                <div className="font-semibold text-gray-800">Grondaie e Pluviali</div>
                <p className="text-sm text-gray-600">
                  Sistema di raccolta acque piovane completo
                </p>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <Card className="bg-amber-50 border-amber-200 rounded-2xl">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Warehouse className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Consigli sulla copertura</h3>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• La tegola canadese offre il miglior rapporto qualità/prezzo</li>
                <li>• Le grondaie sono consigliate per evitare ristagni d'acqua</li>
                <li>• Per zone nevose, preferire tetto a doppia falda</li>
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
