"use client";

import { ConfigurazionePreingresso } from "@/lib/types";

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
    <div>
      <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: "#333" }}>
        Dimensioni del Preingresso
      </h2>

      {/* GRID DIMENSIONI */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "24px" }}>
        <div>
          <label style={{ fontSize: "14px", fontWeight: 600, color: "#333", display: "block", marginBottom: "6px" }}>
            Larghezza (cm) *
          </label>
          <input
            type="number"
            value={config.larghezza || ""}
            onChange={(e) => updateConfig({ larghezza: parseInt(e.target.value) || 0 })}
            placeholder="300"
            min={150}
            max={600}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "15px"
            }}
          />
          <p style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>Min: 150cm - Max: 600cm</p>
        </div>

        <div>
          <label style={{ fontSize: "14px", fontWeight: 600, color: "#333", display: "block", marginBottom: "6px" }}>
            Profondità (cm) *
          </label>
          <input
            type="number"
            value={config.profondita || ""}
            onChange={(e) => updateConfig({ profondita: parseInt(e.target.value) || 0 })}
            placeholder="200"
            min={100}
            max={400}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "15px"
            }}
          />
          <p style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>Min: 100cm - Max: 400cm</p>
        </div>

        <div>
          <label style={{ fontSize: "14px", fontWeight: 600, color: "#333", display: "block", marginBottom: "6px" }}>
            Altezza interna (cm) *
          </label>
          <input
            type="number"
            value={config.altezza || ""}
            onChange={(e) => updateConfig({ altezza: parseInt(e.target.value) || 0 })}
            placeholder="220"
            min={180}
            max={300}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "15px"
            }}
          />
          <p style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>Min: 180cm - Max: 300cm</p>
        </div>
      </div>

      <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#333" }}>
        Tipo di installazione *
      </h3>

      {/* CARDS TIPOLOGIA */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          onClick={() => updateConfig({ tipologia: "indipendente" })}
          style={{
            border: config.tipologia === "indipendente" ? "2px solid #4CAF50" : "1px solid #ccc",
            borderRadius: "10px",
            background: "white",
            padding: "16px",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: config.tipologia === "indipendente" ? "6px solid #4CAF50" : "2px solid #ccc",
                flexShrink: 0
              }}
            />
            <div>
              <div style={{ fontWeight: 600, marginBottom: "4px", color: "#333" }}>
                Struttura Indipendente
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                Modulo autoportante completamente autonomo
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => updateConfig({ tipologia: "addossato" })}
          style={{
            border: config.tipologia === "addossato" ? "2px solid #4CAF50" : "1px solid #ccc",
            borderRadius: "10px",
            background: "white",
            padding: "16px",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: config.tipologia === "addossato" ? "6px solid #4CAF50" : "2px solid #ccc",
                flexShrink: 0
              }}
            />
            <div>
              <div style={{ fontWeight: 600, marginBottom: "4px", color: "#333" }}>
                Addossato a Casetta
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                Si appoggia a una struttura esistente
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INFO BOX */}
      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          background: "#e3f2fd",
          borderRadius: "10px",
          border: "1px solid #90caf9"
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: "8px", color: "#1565c0" }}>
          💡 Consigli sulle misure
        </div>
        <ul style={{ fontSize: "14px", color: "#0d47a1", lineHeight: "1.6", paddingLeft: "20px" }}>
          <li>Per un preingresso standard, consigliamo 300×200cm</li>
          <li>L'altezza interna minima consigliata è 220cm</li>
          <li>Considera lo spazio necessario per l'apertura della porta</li>
        </ul>
      </div>

      {/* BUTTON AVANTI */}
      <button
        onClick={handleSubmit}
        disabled={!config.larghezza || !config.profondita || !config.altezza}
        style={{
          marginTop: "32px",
          padding: "14px 28px",
          background: (!config.larghezza || !config.profondita || !config.altezza) ? "#ccc" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: 600,
          cursor: (!config.larghezza || !config.profondita || !config.altezza) ? "not-allowed" : "pointer",
          fontSize: "15px"
        }}
      >
        Avanti →
      </button>
    </div>
  );
}
