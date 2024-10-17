import styles from './NavBar.module.css'; 

const NavBar = () => {
    return (
        <>
            <nav className="navContainer">
                <ul>
                    <li className={styles.indice}><a href="/">Inicio</a></li>
                    <li className={styles.indice}><a href="/">Nosotros</a></li>
                    <li className={styles.indice}><a href="/">Agendar Turno</a></li>
                </ul>
            </nav>
        </>
    ); 
}

export default NavBar; 