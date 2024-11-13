import React from "react";
import Gallery from "../components/Galery.js";
import AboutUs from "./AboutUs.js";

import "./PaginasFotos.css";

const PortaLibros =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/PortaLibros.png";
const MantelGirasol =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/NuevoMantelGirasoles.png";
const Individuales =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Individuales.png";
const CamisaNegra =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/CamisaNegra.png";
const Paneras =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Paneras.png";
const VestidoBlancoGorro =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/VestidoBlancoGorro.png";
const ChaquetaEleganteBlanca =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/ChaquetaBeige.png";
const ChompaJeanBordada =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/ChompaJeanBordad.png";

const NuestraHistoria = () => {
  return (
    <div className="contenedor-principal">
      <div>
        
          <h1 className="title-pagina-fotos">
            {" "}
            NUESTRO PROYECTO "El Arte del Bordado a Mano. "
          </h1>
          <hr></hr>
          <br></br>
         
          <br></br>
      
      </div>
      <div>
        <Gallery />
        <br></br>
        <br></br>
        <p className="title">
          <br />
          <br />
          <strong>Un legado de bordado, una familia de artesanas.</strong><br></br> Este proyecto nace con
          una misión especial: honrar y apoyar el trabajo de las mujeres de
          nuestras familias, especialmente el de mi madre, quien desde joven
          abrazó el arte del bordado. Su dedicación y amor por esta tradición
          han sido el motor que inspira a las siguientes generaciones,
          transmitiendo conocimiento, pasión y creatividad a cada puntada.<br></br> <br></br>
          <strong>Recuperando la tradición, creando belleza.</strong> <br></br>En Ayana, nuestro propósito
          es revalorizar el bordado tradicional y adaptarlo a los gustos y
          estilos de hoy. Cada pieza es una fusión de tradición y diseño
          contemporáneo, inspirada en la belleza de la naturaleza y hecha a mano
          por mujeres artesanas que ponen su alma en cada detalle. Estas obras
          no solo son piezas de decoración; son parte de un legado vivo y
          significativo. <br></br> <br></br><strong>Empoderamiento y crecimiento .</strong><br></br>Cada día nuestra familia
          de bordadoras crece, y cada creación representa un apoyo real y
          significativo para ellas. Al elegir nuestros productos, no solo llevas
          a casa una pieza única, sino que también formas parte de esta
          historia, apoyando el empoderamiento y crecimiento de mujeres
          talentosas.
        </p>{" "}
        <br></br>
      </div>
      <hr />
      <div className="nosotros-grid">
        <div className="image-row">
          <div className="image-item">
            <img src={PortaLibros} alt="CaminoMesa" className="product-image" />
            <p className="image-description-p">Porta Libros</p>
          </div>

          <div className="image-item">
            <img
              src={MantelGirasol}
              alt="Mantel Girasol"
              className="product-image"
            />
            <p className="image-description-p">Manteles</p>
          </div>

          <div className="image-item">
            <img
              src={Individuales}
              alt="Jean Bordado"
              className="product-image"
            />
            <p className="image-description-p">Individuales</p>
          </div>

          <div className="image-item">
            <img src={Paneras} alt="Paneras" className="product-image" />
            <p className="image-description-p">Paneras</p>
          </div>
        </div>

        <div className="contenedor">
          <p className="title">
            🌿 Nuestra tienda se especializa en bordados inspirados en la
            naturaleza...
          </p>
          <p className="title">
            🧵 Nuestros productos están diseñados para resistir el uso diario
            sin perder su encanto...
          </p >
          <p className="title">
            🎨 ¿Tienes una idea especial en mente? Creamos bordados
            personalizados bajo pedido...
          </p>
        </div>
        <hr />

        <div className="image-row">
          <div className="image-item">
            <img
              src={ChompaJeanBordada}
              alt="ChompaJeanBordada"
              className="product-image small-square"
            />
            <p className="image-description-p">Chompas Jean personalizadas</p>
          </div>

          <div className="image-item">
            <img
              src={ChaquetaEleganteBlanca}
              alt="JeanBordado"
              className="product-image small-square"
            />
            <p className="image-description-p">Chaquetas Elegantes</p>
          </div>

          <div className="image-item">
            <img
              src={CamisaNegra}
              alt="CamisaNegra"
              className="product-image small-square"
            />
            <p className="image-description-p">Camisas </p>
          </div>

          <div className="image-item">
            <img
              src={VestidoBlancoGorro}
              alt="VestidoBlancoGorro"
              className="product-image small-square"
            />
            <p className="image-description-p">Vestidos</p>
          </div>
        </div>

        <div className="contenedor">
          <p className="title">
            🌿 Cumplimos tus deseos de regalar sonrisas y crear momentos
            especiales con tus seres queridos.
          </p>
          <p className="title">
            🌿 La satisfacción de nuestros clientes es nuestra mayor prioridad;
            cada detalle está pensado con amor y dedicación.
          </p>
          <p className="title">
            🌿 Apoya lo nuestro. Cada compra impulsa el trabajo artesanal y
            mantiene viva nuestra tradición.
          </p>
        <p className="title">  🌿 Nuestra línea
            de ropa lleva la personalización a otro nivel. Desde el diseño hasta
            los detalles finales, colaboramos contigo en cada paso para crear
            prendas únicas y adaptadas a tus gustos. Queremos que el resultado
            sea exactamente lo que imaginas: una prenda que refleje tu estilo y
            personalidad. <br></br>Cada producto de Ayana es una obra artesanal, diseñada
            con atención a cada detalle para brindarte una experiencia única y
            hecha a tu medida. Aquí, tus gustos y preferencias son nuestra
            prioridad.</p>
        </div>
        <hr />
        <div className="About">
          <AboutUs />
        </div>
        <hr />
        <div className="contenedor">
          <p className="title">
          🌎 ENVIO A TODO ECUADOR <br />
            Gratis a partir de 200$
          </p>
          <p className="title">
          💳 PAGO 100% SEGURO <br />
            Paypal o transferencia
          </p>
          <p className="title">
          ❤️ Artesanía Auténtica Hecha en Ecuador
          
            <br /> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuestraHistoria;
