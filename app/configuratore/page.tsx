"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Progress } from "@/components/ui/progress";
import { ConfigurazionePreingresso } from "@/lib/types";

// Import steps
import { Step1Misure } from "@/components/configuratore/step1-misure";
import { Step2Struttura } from "@/components/configuratore/step2-struttura";
import { Step3Serramenti } from "@/components/configuratore/step3-serramenti";
import { Step4Copertura } from "@/components/configuratore/step4-copertura";
import { Step5Accessori } from "@/components/configuratore/step5-accessori";
import { Step6Zona } from "@/components/configuratore/step6-zona";
import { StepFinale } from "@/components/configuratore/step-finale";

export default function ConfiguratorePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState<Partial<ConfigurazionePreingresso>>({
    larghezza: 300,
    profondita: 200,
    altezza: 220,
    tipologia: "addossato",
    coibentato: false,
    materiale: "legno",
    finitura: "naturale",
    numeroFinestre: 1,
    tipoFinestre: "battente",
    scuriEsterni: false,
    tipoPorta: "singola_cieca",
    tipoTetto: "monofalda",
    tipoCopertura: "telo_bitumato",
    grondaie: true,
    pavimento: true,
    tipoPavimento: "legno",
    predisposizioneImpianti: false,
    veranda: false,
    pensilina: false,
    altriOptional: "",
    provincia: "",
    accessibilita: "camion",
    posaInclusa: false,
    trasportoIncluso: false,
  });

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  const updateConfig = (updates: Partial<ConfigurazionePreingresso>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Misure config={config} updateConfig={updateConfig} nextStep={nextStep} />;
      case 2:
        return <Step2Struttura config={config} updateConfig={updateConfig} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3Serramenti config={config} updateConfig={updateConfig} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4Copertura config={config} updateConfig={updateConfig} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step5Accessori config={config} updateConfig={updateConfig} nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <Step6Zona config={config} updateConfig={updateConfig} nextStep={nextStep} prevStep={prevStep} />;
      case 7:
        return <StepFinale config={config} updateConfig={updateConfig} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Configura il Tuo Preingresso / Casetta
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Soluzioni versatili per campeggi, agriturismi e strutture ricettive.
              Personalizza ogni dettaglio della tua struttura su misura.
            </motion.p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} di {totalSteps}
              </span>
              <span className="text-sm font-medium text-[#6AB52B]">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Steps Container */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
