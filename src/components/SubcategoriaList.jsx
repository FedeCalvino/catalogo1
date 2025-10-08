import React from 'react';
import { Button,Row,Col } from 'react-bootstrap';
import "yet-another-react-lightbox/styles.css";

export default function SubcategoriaList({ categoria, onSelect, onBack }) {
  return (
    <div>
      <Row style={{display:"flex",alignItems:"start"}}>
        <Col style={{display:"flex",alignItems:"start"}}>
        <Button className='botonVolver' onClick={onBack}>Volver</Button>
        </Col>
        <Col>
        <h2>{categoria.nombre}</h2>
        </Col>
        <Col>
        </Col>
      </Row>
      <div className="gallery">
      {
        categoria.fotos?.map((foto, idx) => (
          <img
            key={idx}
            src={foto}
            alt={`Foto ${idx}`}
            className="gallery-img"
            style={{ cursor: "pointer" }}
            onClick={() => setIndex(idx)}  // Aquí abrimos el lightbox
          />
        ))
      }
      </div>

      <div className="list">
        {categoria.subcategorias?.map((sub, idx) => (
          <button key={idx} onClick={() => onSelect(sub)} className="list-item" style={{ backgroundImage: `url(${sub.fondo})` }}>
            {sub.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}