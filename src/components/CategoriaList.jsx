import React from "react";

export default function CategoriaList({ data, onSelect }) {
  return (
    <div className="list">
      {data.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(cat)}
          className="list-item"
          style={{ backgroundImage: `url(${cat.fondo})`,marginTop:"20px" }}
        >
          {cat.nombre}
        </button>
      ))}
    </div>
  );
}
