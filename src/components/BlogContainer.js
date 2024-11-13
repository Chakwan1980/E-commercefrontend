import React, { useState } from "react";
import "../pages/BlogPage.css"; // Archivo de estilos específicos para el contenedor

import MujeresLavando from "../fotos/MujeresLavando.webp";
import ModeloDeBordado from "../fotos/ModeloBordado.jpg";
const Muestra2 =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/muestra2.jpeg";

const Tela =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Tela.png";
const Hilos =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Hilos.webp";
const Dibujos =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Dibujo.png";
const BolsaAyana =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/BolsaAyana.webp";
const Bordando =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Bordando.png";
const Avatar =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/Avatar.webp";
const Modelo4 =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/modelo+4.png";
const Muestra5 =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/muestra5.jpeg";
const Muestra7 =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/muestra7.jpeg";
const Muestra9 =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/muestra9.jpeg";
const Muestra10 =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/muestra10.jpeg";

const BlogPostContainer = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div>  <h1 className="title-blog"> 🌿 Nuestro proceso de creación..</h1>
    <hr></hr>
    <div className="contenedor-principal-blog">
       
      <div className="grid-container-blog">
        <div className="slogan-container">
       
        </div>
        <hr></hr>
        <div className=".h2-blog-page">  <h2 >Es un viaje de dedicación.</h2></div>



        <div className="content-row">
          <img src={Avatar} alt="MantelAzul" className="blog-post-image" />

          <p className="image-description">
            Cada pieza cuenta una historia <br></br> En Ayana, nuestros
            productos son mucho más que simples objetos; son creaciones
            exclusivas, hechas a mano y con pasión, especialmente para ti. Al
            trabajar bajo pedido, nos aseguramos de que cada pieza reciba el
            tiempo, dedicación y detalle que solo un verdadero artesano puede
            ofrecer.<br></br> Manteles hechos a tu medida.<br></br> Explora
            nuestra colección de manteles, donde cada talla está diseñada para
            adaptarse a tu espacio: <br></br>
           <em>S: ideal para 4 personas, M: perfecto para 8 personas, L: diseñado para 10 personas, XL: pensado para 12 personas </em> <br></br><br></br>


          </p>
        </div>
      </div>
      <div className="grid-container-blog">
        <h2> Con cuidado, que asegura la máxima calidad en cada pieza.</h2>
        <div className="content-row">
          <img src={Tela} alt="MantelAzul" className="blog-post-image" />
          <p className="image-description">
            Posteriormente, seleccionamos cuidadosamente la tela y la adquirimos
            a productores locales, ya que el comercio local contribuye a la
            sostenibilidad de los artesanos. Asistimos a las ferias, nos
            apoyamos mutuamente, y valoramos los muchos años de trabajo en
            conjunto. Sabemos que el respaldo entre nosotros es fundamental para
            mantener viva la tradición artesanal.
          </p>
        </div>
      </div>
      <div className="grid-container-blog">
        <h2>La eleccion de los Hilos. </h2>
        <div className="content-row">
          <img src={Hilos} alt="MantelAzul" className="blog-post-image" />
          <p className="image-description">
            La elección de los hilos para nuestros bordados es un proceso
            esencial y cuidadoso. Cada hilo que utilizamos no solo aporta color,
            sino también resistencia y durabilidad a la pieza final. Elegimos
            hilos de alta calidad que garantizan que los bordados mantendrán su
            brillo y textura con el tiempo, reflejando la dedicación y el esmero
            que ponemos en cada puntada. La selección adecuada del hilo es
            fundamental, ya que asegura que cada diseño tenga la viveza y el
            detalle que merecen, haciendo que nuestras creaciones sean
            auténticas obras de arte que perduren.
          </p>
        </div>
      </div>
      <div className="grid-container-blog">
        <h2>La Eleccion correcta de los Diseños.</h2>
        <div className="content-row">
          <img src={Dibujos} alt="MantelAzul" className="blog-post-image" />
          <p className="image-description">
            La elección de los dibujos para los manteles es un paso fundamental
            en nuestro proceso de creación. Cada diseño es cuidadosamente
            seleccionado para reflejar la belleza y el significado de nuestras
            tradiciones. Nos inspiramos en elementos de la naturaleza, como
            hojas y flores, y en patrones que tienen un valor cultural y
            estético, asegurando que cada mantel tenga una identidad única. Los
            dibujos deben ser equilibrados y armoniosos, con líneas claras que
            permitan un bordado preciso. Este proceso de selección es crucial,
            ya que cada trazo calca el camino para el bordado, guiando nuestras
            manos para dar vida a cada pieza con detalles ricos y simbólicos.
          </p>
        </div>
      </div>
      <div className="grid-container-blog">
        <h2> El cuidado de nuestras Artesanas Bordadoras.</h2>
        <div className="content-row">
          <img src={Bordando} alt="MantelAzul" className="blog-post-image" />
          <p className="image-description">
            Una vez que el diseño está listo en el mantel, se lo entregamos a
            las manos expertas de nuestras artesanas bordadoras. Cada una de
            ellas aporta su talento y dedicación, transformando el dibujo en un
            bordado único y lleno de vida. Este paso es esencial, ya que son las
            artesanas quienes, con su habilidad y experiencia, dan textura,
            profundidad y color a cada detalle. La confianza en su trabajo y en
            su arte es fundamental para nosotros, ya que sabemos que cada
            puntada lleva su pasión y amor por las tradiciones. Gracias a su
            labor, el mantel se convierte en una verdadera obra de arte, lista
            para embellecer cualquier espacio.
          </p>
        </div>
      </div>
      <div className="grid-container-blog">
        <h2>El lavado con cuidado de las prendas. </h2>
        <div className="content-row">
          <img
            src={MujeresLavando}
            alt="MujeresLavando"
            className="blog-post-image"
          />
          <p className="image-description">
            Una vez que las bordadoras han completado su labor, damos paso a la
            selección del acabado final del mantel. Evaluamos cuidadosamente si
            el filo se completará con encaje o crochet, eligiendo el detalle que
            mejor realce el diseño y mantenga la armonía de la pieza. Este
            último toque artesanal añade elegancia y refina el trabajo,
            asegurando que cada mantel sea verdaderamente especial. Después de
            finalizar el borde, procedemos a lavar el mantel con sumo cuidado,
            dejándolo listo para su envío. Así garantizamos que llegue a su
            destino impecable, reflejando toda la dedicación y esmero puestos en
            cada paso de su creación.
          </p>
        </div>
      </div>
      <div className="grid-container-blog">
        <h2> EL Envío</h2>
        <div className="content-row">
          <img src={BolsaAyana} alt="Enviado" className="blog-post-image" />
          <p className="image-description">
            Una vez que el mantel está completamente terminado y listo para
            envío, lo preparamos con sumo cuidado para garantizar que llegue en
            perfectas condiciones. Todo el proceso, desde el diseño inicial
            hasta el último acabado, requiere una dedicación especial, lo que
            hace que el tiempo de entrega sea de aproximadamente 15 a 20 días,
            dependiendo del tamaño del mantel o del producto elegido. Este
            tiempo es necesario para asegurar que cada etapa del proceso
            artesanal se lleve a cabo con la calidad y detalle que nos
            caracteriza. Al ser una creación completamente artesanal, cada
            mantel cuenta una historia de dedicación, paciencia y amor por el
            arte, cualidades que no se pueden apresurar. Así, nuestros clientes
            pueden recibir una pieza única y auténtica, que lleva consigo la
            esencia de nuestro trabajo.
          </p>
        </div>
      </div>

      <div className="grid-container-blog">
        <h2> Tipo de bordados</h2>
        <div className="content-row">
          <img src={Muestra7} alt="Muestra7" width={160} height={150} />
          <img src={Muestra2} alt="Muestra2" width={160} height={150} />
          <img src={Modelo4} alt="Modelo4" width={160} height={150} />
          <img src={Muestra5} alt="Modelo3" width={160} height={150} />
          <img src={Muestra9} alt="Muestra9" width={160} height={150} />
          <img src={Muestra10} alt="Muestra10" width={160} height={150} />
        </div>
      </div>

      <div className="grid-container-blog">
        <h3>Consejos para el Cuidado de Productos Bordados:</h3>

        <li>
          🌿 Lavar a Mano: Siempre que sea posible, lava los manteles y prendas
          bordadas a mano con agua fría o tibia y un detergente suave.
        </li>
        <li>
          🌿 Evitar el Exceso de Frotamiento:Frota suavemente las áreas bordadas
          al lavar. No retuerzas ni exprimas con fuerza.
        </li>
        <li>
          🌿 Secado al Aire Libre: Seca al aire libre y a la sombra para evitar
          el desgaste de los hilos y la tela.
        </li>
        <li>
          🌿 Planchar con Cuidado: Plancha del revés y cubre el bordado con una
          tela de algodón a baja temperatura.
        </li>
        <li>
          🌿 Almacenamiento Adecuado: Guarda en un lugar fresco y seco, lejos
          del sol y la humedad.
        </li>
        <li>
          🌿 Evitar Superficies Ásperas: Evita el contacto con superficies que
          puedan dañar los hilos.
        </li>
        <li>
          🌿 Mantenimiento Regular: Revisa regularmente y repara puntadas
          sueltas.
        </li>
        <li>
          🌿 con Alimentos y Bebidas: Usa un protector adicional en los manteles
          para evitar manchas.
        </li>
      </div>
    </div>
    </div>
  );
};

export default BlogPostContainer;
