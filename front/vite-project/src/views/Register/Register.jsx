import FormikRegister from '../../components/RegisterComponent/FormikRegister'; // Asegúrate de que la ruta sea correcta
import styles from './Register.module.css'; // Asegúrate de que la ruta sea correcta

// eslint-disable-next-line react/prop-types
const Register = ({ onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <FormikRegister onClose={onClose}/>
            </div>
        </div>
    );
};

export default Register;