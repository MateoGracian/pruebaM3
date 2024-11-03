import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { users, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className={styles.container}>
              <div className={styles.identityContainer}>
                {users ? (
                  <>
                    <li><button onClick={handleLogout} className={styles.logoutButton}>Cerrar sesión</button></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/login" className={styles.indice}>Iniciar sesión</Link></li>
                    <li><Link to="/register" className={styles.indice}>Crear cuenta</Link></li>
                  </>
                )}
              </div>
          <nav className={styles.indiceContainer}>
            <ul className={styles.navContainer}>
              <li><Link to="/" className={styles.indice}>INICIO</Link></li>
              {users && <li><Link to="/mis-turnos" className={styles.indice}>MIS TURNOS</Link></li>}
              <li><Link to="/servicios" className={styles.indice}>SERVICIOS</Link></li>
              <li><Link to="/sucursales" className={styles.indice}>SUCURSALES</Link></li>
              <li><Link to="/agendar-turno" id={styles.reservar} className={styles.scheduleButton}>AGENDAR TURNO</Link></li>
            </ul>
          </nav>
        </div>
      );
    };

export default NavBar; 