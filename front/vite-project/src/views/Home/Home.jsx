import styles from './Home.module.css'
import logoBarber from '../../assets/logoBarber.png'
import imagesBarberGif from '../../assets/imagesBarberGif.gif'
import Servicios from '../../views/Servicios/Servicios'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  
    return (
      <>
        <div className={styles.barberLogoContainer}>
          <img className={styles.barberLogo} src={logoBarber} /> 
        </div>
        <div className={styles.imagesGif}>
          <img className={styles.gif} src={imagesBarberGif} />
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>
              ESTO ES LO QUE HACEMOS
            </h2>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.texto}> ¡Hola a todos! Somos los chicos detrás de Gracian BarberShop, y queremos compartir un poco de nuestra historia. En 2018, decidimos dar el paso de convertir nuestra pasión en realidad: inaugurar nuestra propia barbería. Lo que comenzó como un sueño entre amigos, con muchas charlas hasta altas horas de la noche y grandes dosis de ilusión, se materializó con mucho esfuerzo y trabajo duro.

Sabemos lo que significa luchar por tus sueños y superar los retos, porque lo vivimos cada día. Empezamos desde cero, enfrentando desafíos que nos hicieron más fuertes y más unidos. Pero gracias a la dedicación y al apoyo de cada uno de ustedes, hoy Gracian BarberShop es un lugar donde no solo se cortan cabellos y se cuidan barbas, sino donde se comparte camaradería, risas y estilo.

Así que, si buscas más que un corte de pelo, ven a conocernos. Queremos que te sientas como en casa, en nuestra casa. ¡Te esperamos con los brazos abiertos!</p>          
          </div>
          <hr className={styles.hrLine}></hr>
        <section id='servicios'>
          <Servicios/>
        </section>
        </div>
        <section id='footer'>
          <Footer/>
        </section>
      </>
    );
}

export default Home;