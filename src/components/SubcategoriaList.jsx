import React from 'react';
import { Button,Row,Col } from 'react-bootstrap';


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

      <div className="list">
        {categoria.subcategorias.map((sub, idx) => (
          <button key={idx} onClick={() => onSelect(sub)} className="list-item" style={{ backgroundImage: `url(${sub.fondo})` }}>
            {sub.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}