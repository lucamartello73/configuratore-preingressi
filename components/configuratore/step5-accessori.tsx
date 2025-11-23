"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ConfigurazionePreingresso } from "@/lib/types";
import { Package, ArrowRight, ArrowLeft } from "lucide-react";

interface Step5Props {
  config: Partial<ConfigurazionePreingresso>;
  updateConfig: (updates: Partial<ConfigurazionePreingresso>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function Step5Accessori({ config, updateConfig, nextStep, prevStep }: Step5Props) {
  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#6AB52B] rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Accessori e Optional
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Personalizza con elementi aggiuntivi
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pavimento */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
              <Checkbox
                id="pavimento"
                checked={config.pavimento}
                onCheckedChange={(checked) => updateConfig({ pavimento: checked as boolean })}
              />
              <label htmlFor="pavimento" className="flex-1 cursor-pointer">
                <div className="font-semibold text-gray-800">Pavimento Incluso</div>
                <p className="text-sm text-gray-600">Base calpestabile finita</p>
              </label>
            </div>

            {config.pavimento && (
              <div className="ml-8">
                <Label className="text-gray-700 font-medium mb-3 block">Tipo Pavimento</Label>
                <RadioGroup
                  value={config.tipoPavimento}
                  onValueChange={(value) => updateConfig({ tipoPavimento: value as any })}
                  className="space-y-2"
                >
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="legno" id="pav_legno" />
                    <span className="text-gray-800">Legno (tavolato)</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="metallo" id="pav_metallo" />
                    <span className="text-gray-800">Metallo con piedini regolabili</span>
                  </label>
                </RadioGroup>
              </div>
            )}
          </div>

          {/* Altri Optional */}
          <div className="border-t pt-6 space-y-4">
            <Label className="text-gray-700 font-medium block">Optional Aggiuntivi</Label>
            
            <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
              <Checkbox
                id="predisposizioneImpianti"
                checked={config.predisposizioneImpianti}
                onCheckedChange={(checked) => updateConfig({ predisposizioneImpianti: checked as boolean })}
              />
              <label htmlFor="predisposizioneImpianti" className="flex-1 cursor-pointer">
                <div className="font-semibold text-gray-800">Predisposizione Impianti</div>
                <p className="text-sm text-gray-600">Tracce per elettrico/idraulico</p>
              </label>
            </div>

            <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
              <Checkbox
                id="veranda"
                checked={config.veranda}
                onCheckedChange={(checked) => updateConfig({ veranda: checked as boolean })}
              />
              <label htmlFor="veranda" className="flex-1 cursor-pointer">
                <div className="font-semibold text-gray-800">Veranda Esterna</div>
                <p className="text-sm text-gray-600">Estensione coperta anteriore</p>
              </label>
            </div>

            <div className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:border-gray-300 transition">
              <Checkbox
                id="pensilina"
                checked={config.pensilina}
                onCheckedChange={(checked) => updateConfig({ pensilina: checked as boolean })}
              />
              <label htmlFor="pensilina" className="flex-1 cursor-pointer">
                <div className="font-semibold text-gray-800">Pensilina Protezione</div>
                <p className="text-sm text-gray-600">Tettoia sopra ingresso</p>
              </label>
            </div>
          </div>

          {/* Note Aggiuntive */}
          <div className="border-t pt-6">
            <Label htmlFor="altriOptional" className="text-gray-700 font-medium mb-3 block">
              Altri Optional o Richieste Particolari
            </Label>
            <Textarea
              id="altriOptional"
              value={config.altriOptional || ""}
              onChange={(e) => updateConfig({ altriOptional: e.target.value })}
              placeholder="Descrivi eventuali accessori o personalizzazioni aggiuntive..."
              rows={4}
              className="resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              Es: fioriere, raccordi estetici, colori personalizzati, ecc.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <Card className="bg-purple-50 border-purple-200 rounded-2xl">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-purple-900 mb-2">Accessori consigliati</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Il pavimento è fortemente consigliato per strutture abitate</li>
                <li>• La veranda aumenta lo spazio vivibile esterno</li>
                <li>• La predisposizione impianti facilita installazioni future</li>
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
