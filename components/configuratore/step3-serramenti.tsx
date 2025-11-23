"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ConfigurazionePreingresso } from "@/lib/types";
import { DoorClosed, ArrowRight, ArrowLeft } from "lucide-react";

interface Step3Props {
  config: Partial<ConfigurazionePreingresso>;
  updateConfig: (updates: Partial<ConfigurazionePreingresso>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function Step3Serramenti({ config, updateConfig, nextStep, prevStep }: Step3Props) {
  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#6AB52B] rounded-lg">
              <DoorClosed className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Serramenti e Porte
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Configura finestre e ingressi
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Finestre */}
          <div className="space-y-4">
            <Label htmlFor="numeroFinestre" className="text-gray-700 font-medium">
              Numero di Finestre
            </Label>
            <Input
              id="numeroFinestre"
              type="number"
              value={config.numeroFinestre || 0}
              onChange={(e) => updateConfig({ numeroFinestre: parseInt(e.target.value) || 0 })}
              placeholder="1"
              min={0}
              max={4}
              className="text-lg max-w-xs"
            />
            <p className="text-xs text-gray-500">Max: 4 finestre</p>
          </div>

          {/* Tipo Finestre */}
          {config.numeroFinestre && config.numeroFinestre > 0 && (
            <div className="border-t pt-6">
              <Label className="text-gray-700 font-medium mb-4 block">
                Tipologia Finestre *
              </Label>
              <RadioGroup
                value={config.tipoFinestre}
                onValueChange={(value) => updateConfig({ tipoFinestre: value as any })}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <label
                  className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                    config.tipoFinestre === "vasistas"
                      ? "border-[#6AB52B] bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <RadioGroupItem value="vasistas" id="vasistas" />
                  <div>
                    <span className="font-semibold text-gray-800 block mb-1">Vasistas</span>
                    <p className="text-sm text-gray-600">Apertura a ribalta dall'alto</p>
                  </div>
                </label>

                <label
                  className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                    config.tipoFinestre === "battente"
                      ? "border-[#6AB52B] bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <RadioGroupItem value="battente" id="battente" />
                  <div>
                    <span className="font-semibold text-gray-800 block mb-1">A Battente</span>
                    <p className="text-sm text-gray-600">Apertura laterale classica</p>
                  </div>
                </label>

                <label
                  className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                    config.tipoFinestre === "fisse"
                      ? "border-[#6AB52B] bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <RadioGroupItem value="fisse" id="fisse" />
                  <div>
                    <span className="font-semibold text-gray-800 block mb-1">Fisse</span>
                    <p className="text-sm text-gray-600">Non apribili, solo luce</p>
                  </div>
                </label>
              </RadioGroup>
            </div>
          )}

          {/* Scuri */}
          {config.numeroFinestre && config.numeroFinestre > 0 && (
            <div className="border-t pt-6">
              <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
                <Checkbox
                  id="scuriEsterni"
                  checked={config.scuriEsterni}
                  onCheckedChange={(checked) => updateConfig({ scuriEsterni: checked as boolean })}
                />
                <label htmlFor="scuriEsterni" className="flex-1 cursor-pointer">
                  <div className="font-semibold text-gray-800">Scuri Esterni in Legno</div>
                  <p className="text-sm text-gray-600">Protezione e oscuramento aggiuntivo</p>
                </label>
              </div>
            </div>
          )}

          {/* Tipo Porta */}
          <div className="border-t pt-6">
            <Label className="text-gray-700 font-medium mb-4 block">
              Porta d'Ingresso *
            </Label>
            <RadioGroup
              value={config.tipoPorta}
              onValueChange={(value) => updateConfig({ tipoPorta: value as any })}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipoPorta === "singola_cieca"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="singola_cieca" id="singola_cieca" />
                <div>
                  <span className="font-semibold text-gray-800 block mb-1">Singola Cieca</span>
                  <p className="text-sm text-gray-600">Un'anta senza vetro</p>
                </div>
              </label>

              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipoPorta === "singola_vetro"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="singola_vetro" id="singola_vetro" />
                <div>
                  <span className="font-semibold text-gray-800 block mb-1">Singola con Vetro</span>
                  <p className="text-sm text-gray-600">Un'anta con finestra</p>
                </div>
              </label>

              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipoPorta === "doppia_cieca"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="doppia_cieca" id="doppia_cieca" />
                <div>
                  <span className="font-semibold text-gray-800 block mb-1">Doppia Cieca</span>
                  <p className="text-sm text-gray-600">Due ante senza vetro</p>
                </div>
              </label>

              <label
                className={`flex items-start space-x-3 border-2 rounded-xl p-4 cursor-pointer transition ${
                  config.tipoPorta === "doppia_vetro"
                    ? "border-[#6AB52B] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="doppia_vetro" id="doppia_vetro" />
                <div>
                  <span className="font-semibold text-gray-800 block mb-1">Doppia con Vetro</span>
                  <p className="text-sm text-gray-600">Due ante con finestre</p>
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
