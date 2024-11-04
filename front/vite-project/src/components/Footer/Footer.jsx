import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3>Contacto</h3>
          <p>Email: contacto@tuservicio.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className={styles.social}>
          <h3>Síguenos</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; 2023 TuServicio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;