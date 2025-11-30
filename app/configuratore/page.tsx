"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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

  const steps = [
    { num: 1, label: "Dimensioni" },
    { num: 2, label: "Struttura" },
    { num: 3, label: "Tetto" },
    { num: 4, label: "Serramenti" },
    { num: 5, label: "Optional" },
    { num: 6, label: "Dati Cliente" },
    { num: 7, label: "Riepilogo" }
  ];

  return (
    <>
      <Header />
      
      {/* CONFIG WRAPPER */}
      <div 
        style={{
          background: "#f8f8f8",
          padding: "40px 0",
          fontFamily: "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
          minHeight: "calc(100vh - 200px)"
        }}
      >
        {/* STEP BAR */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <div style={{ display: "flex", gap: "24px" }}>
            {steps.map((step) => {
              const isActive = currentStep === step.num;
              const isCompleted = currentStep > step.num;
              
              return (
                <div 
                  key={step.num}
                  style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center",
                    cursor: isCompleted ? "pointer" : "default"
                  }}
                  onClick={() => isCompleted && setCurrentStep(step.num)}
                >
                  <div 
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isActive || isCompleted ? "#4CAF50" : "transparent",
                      border: isActive || isCompleted ? "none" : "2px solid #ccc",
                      color: isActive || isCompleted ? "white" : "#666",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 600
                    }}
                  >
                    {step.num}
                  </div>
                  <span 
                    style={{ 
                      fontSize: "14px", 
                      marginTop: "6px",
                      color: isActive ? "#4CAF50" : "#666",
                      fontWeight: isActive ? 600 : 400
                    }}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* LAYOUT DUE COLONNE */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "32px",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 20px"
          }}
        >
          {/* COLONNA SINISTRA - FORM */}
          <div style={{ minHeight: "500px" }}>
            {renderStep()}
          </div>

          {/* COLONNA DESTRA - ANTEPRIMA */}
          <div 
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid #eee",
              height: "fit-content",
              position: "sticky",
              top: "20px"
            }}
          >
            <h3 style={{ marginBottom: "12px", fontSize: "18px", fontWeight: 600 }}>
              Anteprima Configurazione
            </h3>
            
            {/* Preview Placeholder */}
            <div 
              style={{
                width: "100%",
                height: "200px",
                background: "#d9ecff",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#0066cc",
                fontSize: "14px",
                fontWeight: 500
              }}
            >
              Immagine 3D
            </div>

            {/* Summary */}
            <div style={{ marginTop: "16px", fontSize: "14px" }}>
              <div style={{ marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #eee" }}>
                <div style={{ color: "#666", marginBottom: "4px" }}>Dimensioni</div>
                <div style={{ fontWeight: 600 }}>
                  {config.larghezza || 0} × {config.profondita || 0} × {config.altezza || 0} cm
                </div>
              </div>

              <div style={{ marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #eee" }}>
                <div style={{ color: "#666", marginBottom: "4px" }}>Tipologia</div>
                <div style={{ fontWeight: 600, textTransform: "capitalize" }}>
                  {config.tipologia === "indipendente" ? "Struttura Indipendente" : "Addossato a Casetta"}
                </div>
              </div>

              <div style={{ marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #eee" }}>
                <div style={{ color: "#666", marginBottom: "4px" }}>Materiale</div>
                <div style={{ fontWeight: 600, textTransform: "capitalize" }}>
                  {config.materiale === "legno" ? "Legno Lamellare" : config.materiale === "pvc" ? "PVC" : "Metallo"}
                </div>
              </div>

              {config.numeroFinestre && config.numeroFinestre > 0 && (
                <div style={{ marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #eee" }}>
                  <div style={{ color: "#666", marginBottom: "4px" }}>Finestre</div>
                  <div style={{ fontWeight: 600 }}>
                    {config.numeroFinestre} finestra/e
                  </div>
                </div>
              )}

              <div style={{ 
                marginTop: "16px", 
                padding: "12px", 
                background: "#f0f9ff", 
                borderRadius: "8px",
                border: "1px solid #bae6fd"
              }}>
                <div style={{ fontSize: "12px", color: "#0284c7", fontWeight: 600 }}>
                  💡 Suggerimento
                </div>
                <div style={{ fontSize: "12px", color: "#0c4a6e", marginTop: "4px" }}>
                  Step {currentStep} di {totalSteps} completati
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
