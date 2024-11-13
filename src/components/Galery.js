import React, { useState, useEffect } from "react";
import './galery.css'


const Bordando =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Bordando.png";
const FolsaRegalo =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/bosaregalo.png";
const camisetaGallo =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/camisetaGallo.png";
const camisetasBordadas =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/camisetasbordadas.png";
const camisetasVariadas =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/camisetasvariadas.png";
const chaquetaBeige =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/ChaquetaBeige.png";
const cojines =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/cojines.png";
const Gorra =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Gorra.png";
const MantelBlanco =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/mantelblanco.png";
const Posavasos =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/posavasos.png";
const ServilletasDeColores =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/servilletasdecolores.png";

const VestidoNegro =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/VestidoNegro.png";
const VestidoNina =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/vestidonina.png";
const CamisaHombre ="https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/CamisaHombre.png";  

const Gallery = () => {
  // array
  const images = [
    Bordando,
    FolsaRegalo,
    camisetaGallo,
    camisetasBordadas,
    camisetasVariadas,
    chaquetaBeige,
    cojines,
    Gorra,
    MantelBlanco,
    Posavasos,
    ServilletasDeColores,
    VestidoNegro,
    VestidoNina,
    CamisaHombre,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Temporizador para cambiar la imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="carousel-gallery">
      <div className="carousel-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Descripción de la imagen ${index + 1}`}
            className={`carousel-image ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;