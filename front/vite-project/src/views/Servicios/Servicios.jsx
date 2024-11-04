import styles from './Servicios.module.css';
import imgCorte from '../../assets/imgCorte.jpg';
import imgBarba from '../../assets/imgBarba.jpg';
import imgCorteNene from '../../assets/imgNeneCorte.jpg';

const Servicios = () => {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Nuestro Servicios</h2>
        </div>

        <div className={styles.cardsContainer}>
            <div className={styles.servCards}>
              <img src={imgCorte} id={styles.corteImagen} className={styles.imagen}/> 
              <h3> Corte </h3>
              <p> Clásico o moderno. Marcamos tendencia combinando máquinas y tijeras. </p>
            </div>
            <div className={styles.servCards}>
              <img src={imgBarba} className={styles.imagen}/> 
              <h3> Barba </h3>
              <p> Afeitada tradicional o recorte de barba. Contamos con el servicio de toalla caliente.  </p>
            </div>
            <div className={styles.servCards}>
              <img src={imgCorteNene} id={styles.neneCorteImagen}className={styles.imagen} />
              <h3> Corte para niños </h3>
              <p> El chiquito sabe lo que quiere, por eso atendemos sus antojos. </p>
            </div>
        </div>
      </div>
    );
}

export default Servicios;