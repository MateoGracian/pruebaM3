import styles from './Home.module.css'
import logoBarber from '../../assets/logoBarber.png'

const Home = () => {
  
    return (
      <>
        <div className={styles.barberLogoContainer}>
          <img className={styles.barberLogo} src={logoBarber} /> 
        </div>
      </>
    );
}

export default Home;