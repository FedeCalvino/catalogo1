import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button,Row,Col } from 'react-bootstrap';

export default function Galeria({titulo, fotos, onBack }) {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <Row style={{display:"flex",alignItems:"start"}}>
        <Col style={{display:"flex",alignItems:"start"}}>
        <Button className='botonVolver' onClick={onBack}>Volver</Button>
        </Col>
        <Col>
        <h1>{titulo}</h1>
        </Col>
        <Col>
        </Col>
      </Row>
      <div className="gallery">
        {fotos.map((foto, idx) => (
          <img
            key={idx}
            src={foto}
            alt={`Foto ${idx}`}
            className="gallery-img"
            style={{ cursor: "pointer" }}
            onClick={() => setIndex(idx)}  // Aquí abrimos el lightbox
          />
        ))}
      </div>

      {index >= 0 && (
        <Lightbox
          slides={fotos.map((src) => ({ src }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          onPrev={() => setIndex((i) => (i - 1 + fotos.length) % fotos.length)}
          onNext={() => setIndex((i) => (i + 1) % fotos.length)}
        />
      )}
    </div>
  );
}
