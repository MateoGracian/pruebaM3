import styles from './Home.module.css'
import logoBarber from '../../assets/logoBarber.png'
import imagesBarberGif from '../../assets/imagesBarberGif.gif'
import Servicios from '../../views/Servicios/Servicios'

const Home = () => {
  
    return (
      <>
        <div className={styles.barberLogoContainer}>
          <img className={styles.barberLogo} src={logoBarber} /> 
        </div>
        <div className={styles.imagesGif}>
          <img className={styles.gif} src={imagesBarberGif} />
        </div>
        <div>
          <Servicios/>
        </div>
      </>
    );
}

export default Home;