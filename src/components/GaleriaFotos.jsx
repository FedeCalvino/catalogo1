import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button, Row, Col } from "react-bootstrap";
import Video from "yet-another-react-lightbox/plugins/video";



export default function Galeria({ titulo, fotos, onBack }) {
  const [index, setIndex] = useState(-1);

  const slides = fotos.map((item) => {
    const esVideo =
      item.endsWith(".mp4") || item.endsWith(".mov") || item.endsWith(".webm");
    return esVideo
      ? {
          type: "video",
          sources: [{ src: item, type: "video/mp4" }],
          autoPlay: true,
          controls: true,
        }
      : { src: item };
  });
  
  return (
    <div>
      <Row style={{ display: "flex", alignItems: "start" }}>
        <Col style={{ display: "flex", alignItems: "start" }}>
          <Button className="botonVolver" onClick={onBack}>
            Volver
          </Button>
        </Col>
        <Col>
          <h1>{titulo}</h1>
        </Col>
        <Col></Col>
      </Row>
      <div className="gallery">
        {fotos.map((item, idx) => {
          // Detectamos si es un video según la extensión o tipo de dato
          const esVideo =
            item.endsWith(".mp4") ||
            item.endsWith(".mov") ||
            item.endsWith(".webm");

          return esVideo ? (
            <video
              key={idx}
              src={item}
              className="gallery-img"
              style={{ cursor: "pointer", width: "100%", borderRadius: "8px" }}
              onClick={() => setIndex(idx)} // Abrir en lightbox si querés
              controls
            />
          ) : (
            <img
              key={idx}
              src={item}
              alt={`Foto ${idx}`}
              className="gallery-img"
              style={{ cursor: "pointer", borderRadius: "8px" }}
              onClick={() => setIndex(idx)}
            />
          );
        })}
      </div>

      {index >= 0 && (
        <Lightbox
          plugins={[Video]}
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          on={{ view: ({ index: i }) => setIndex(i) }}
        />
      )}
    </div>
  );
}
