import React, { useState } from "react";
import CategoriaList from "./components/CategoriaList";
import SubcategoriaList from "./components/SubcategoriaList";
import GaleriaFotos from "./components/GaleriaFotos";
import catalogo from "./data/catalogo.json";

export default function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] =
    useState(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"15px"
        }}
      >
        <img
          src="/Fotos/ImgLogo.png"
          alt="Logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <div className="app">
        {!categoriaSeleccionada && (
          <CategoriaList data={catalogo} onSelect={setCategoriaSeleccionada} />
        )}
        {categoriaSeleccionada && !subcategoriaSeleccionada && (
          <SubcategoriaList
            categoria={categoriaSeleccionada}
            onSelect={setSubcategoriaSeleccionada}
            onBack={() => setCategoriaSeleccionada(null)}
          />
        )}
        {categoriaSeleccionada && subcategoriaSeleccionada && (
          <GaleriaFotos
            titulo={subcategoriaSeleccionada.nombre}
            fotos={subcategoriaSeleccionada.fotos}
            onBack={() => setSubcategoriaSeleccionada(null)}
          />
        )}
      </div>
    </>
  );
}
