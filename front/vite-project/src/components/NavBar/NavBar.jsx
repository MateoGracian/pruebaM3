import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.identityContainer}>
                    <li><Link to="/Register" className={styles.identity}>Crear cuenta</Link></li>
                    <li><Link to="/Login" className={styles.identity}>Iniciar Sesion</Link></li>
                
                </div>
                <nav>
                    <ul className={styles.navContainer}>
                        <li><a href="/" className={styles.indice}>INICIO</a></li>
                        <li className={styles.indice}><Link to="/mis-turnos"> MIS TURNOS </Link></li>
                        <li><a href="/" className={styles.indice}>SERVICIOS</a></li>
                        <li><a href="/" className={styles.indice}>SUCURSALES</a></li>
                        <li ><Link to="/agendar-turno" id={styles.reservar} className={styles.indice}>AGENDAR TURNO</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    ); 
}

export default NavBar; 