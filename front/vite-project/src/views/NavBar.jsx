import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.navContainer}>
                        <li><a href="/" className={styles.indice}>INICIO</a></li>
                        <li><a href="/" className={styles.indice}>NOSOTROS</a></li>
                        <li><a href="/" className={styles.indice}>SERVICIOS</a></li>
                        <li><a href="/" className={styles.indice}>SUCURSALES</a></li>
                        <li><a href="/" id={styles.reservar} className={styles.indice}>AGENDAR TURNO</a></li>
                    </ul>
                </nav>
            </div>
        </>
    ); 
}

export default NavBar; 