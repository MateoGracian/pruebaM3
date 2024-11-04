import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.branch}>
                    <h4>Avenida Siempre Viva 123, Springfield</h4>
                    <p>Tel. 123-456-7890</p>
                    <p>Lun a Vie de 10 a 20 h.</p>
                    <p>Sábado de 10 a 19 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 1234 5678</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Calle Falsa 456, Ciudad Capital</h4>
                    <p>Tel. 987-654-3210</p>
                    <p>Lun a Vie de 9:30 a 20 h.</p>
                    <p>Sábado de 10 a 19 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 8765 4321</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Av. del Sol 789, Villa Aurora</h4>
                    <p>Tel. 345-678-9012</p>
                    <p>Lun a Sáb de 10 a 20 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 5678 9012</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Paseo Luna 159, Nuevo Horizonte</h4>
                    <p>Tel. 321-987-6543</p>
                    <p>Lun a Vie de 10:30 a 20:30 h.</p>
                    <p>Sábado de 10 a 20 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 9876 5432</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Cañada Verde 222, Zona Norte</h4>
                    <p>Tel. 456-123-7890</p>
                    <p>Lun a Sáb de 10 a 20 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 4321 5678</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Bulevar Central 1010, Las Rosas</h4>
                    <p>Tel. 555-001-2345</p>
                    <p>Lun a Vie de 9:00 a 19 h.</p>
                    <p>Sábado de 10 a 18 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 5550 1234</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Calle Mayor 303, Pueblo Viejo</h4>
                    <p>Tel. 555-987-6543</p>
                    <p>Lun a Vie de 10 a 20 h.</p>
                    <p>Sábado de 10 a 19 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 9876 5433</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Camino Real 505, Santa María</h4>
                    <p>Tel. 555-123-4567</p>
                    <p>Lun a Vie de 10:30 a 20:30 h.</p>
                    <p>Sábado de 10 a 20 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 1234 5677</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Plaza Dorada 707, Colinas del Sur</h4>
                    <p>Tel. 555-765-4321</p>
                    <p>Lun a Vie de 9 a 20 h.</p>
                    <p>Sábado de 10 a 18 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 7654 3210</a></p>
                </div>
                <div className={styles.branch}>
                    <h4>Parque Lúgano 808, Altos del Lago</h4>
                    <p>Tel. 555-246-8102</p>
                    <p>Lun a Sáb de 10 a 19 h.</p>
                    <p><a href="tel:+541112345678" className={styles.phoneLink}>+54 11 2468 1020</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
