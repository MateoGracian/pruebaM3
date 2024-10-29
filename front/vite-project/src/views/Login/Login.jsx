import styles from './Login.module.css';
import FormikLogin from '../../components/LoginComponent/FormikLogin';

// eslint-disable-next-line react/prop-types
const Login = ( {onClose} ) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <FormikLogin onClose={onClose}/>
            </div>
        </div>
    )
}

export default Login;