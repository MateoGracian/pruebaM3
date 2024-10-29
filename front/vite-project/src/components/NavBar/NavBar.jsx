import styles from './NavBar.module.css';
import Register from '../../views/Register/Register';
import { useState } from 'react';

const NavBar = () => {
    const [showRegister, setShowRegister] = useState(false);

    const handleRegisterClick = (event) => {
        event.preventDefault();
        setShowRegister(true);
    }

    const handleCloseRegister = () => {
        setShowRegister(false);
    }
    return (
        <>

            <div className={styles.container}>
                <nav>
                    <ul className={styles.navContainer}>
                        <div className={styles.identityContainer}>
                            <li><a href="/" className={styles.identity} onClick={handleRegisterClick}>Crear cuenta</a></li>
                            <li><a href="/" className={styles.identity}>Iniciar sesión</a></li>
                        </div>
                        <li><a href="/" className={styles.indice}>INICIO</a></li>
                        <li><a href="/" className={styles.indice}>NOSOTROS</a></li>
                        <li><a href="/" className={styles.indice}>SERVICIOS</a></li>
                        <li><a href="/" className={styles.indice}>SUCURSALES</a></li>
                        <li><a href="/" id={styles.reservar} className={styles.indice}>AGENDAR TURNO</a></li>
                    </ul>
                </nav>
            </div>
            {showRegister && <Register onClose={handleCloseRegister} />}
        </>
    ); 
}

export default NavBar; 