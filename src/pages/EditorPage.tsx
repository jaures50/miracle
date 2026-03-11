// src/pages/EditorPage.tsx
import React from "react";

export default function Editer() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f2f5",
      }}
    >
      {/* Sidebar verticale */}
      <aside
        style={{
          width: "200px",
          backgroundColor: "#2d3436",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Outils</h2>

        <button
          style={{
            padding: "10px",
            backgroundColor: "#6c5ce7",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          Ajouter texte
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#00b894",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          Ajouter image
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#d63031",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          Supprimer
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#fdcb6e",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          Télécharger
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#0984e3",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          Couleurs
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#fd79a8",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          Shapes
        </button>
      </aside>

      {/* Zone de travail */}
      <main
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "800px",
            height: "600px",
            border: "2px dashed #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#aaa",
            fontSize: "20px",
          }}
        >
          Zone de création
        </div>
      </main>
    </div>
  );
}