import { useFormik } from "formik";
import styles from "./FormikLogin.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState} from "react";
import { UserContext } from "../../context/UserContext";

const FormikLogin = () => {
  const { updateUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); 

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "El nombre de usuario es requerido";
      }
      if (!values.password) {
        errors.password = "La contraseña es requerida";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.post(
          "http://localhost:7070/users/login",
          values
        );

        updateUser(response.data);
        console.log(response.data.id);
        resetForm();
        navigate("/mis-turnos");

        return response.data;
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        setError('Usuario o contraseña incorrectos');
      } finally {
        setLoading(false);
      }
    },
  });

  const handleCloseLogin = () => {
    navigate("/");
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.myForm}>
        <button className={styles.closeButton} onClick={handleCloseLogin}>
          X
        </button>

        <h1 className={styles.title}>Login</h1>

        <div className={styles.inputContainer}>
          <label>Usuario: </label>
          <input
            className={styles.userInput}
            id="username"
            name="username"
            type="text"
            placeholder="Ingrese su usuario"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className={styles.errors}>{formik.errors.username}</div>
          ) : null}
        </div>

        <div className={styles.inputContainer}>
          <label>Password: </label>
          <input
            className={styles.userInput}
            id="password"
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.errors}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Cargando...' : 'Login'}
        </button>

        <Link to="/register" className={styles.registerLink}>
          {" "}
          ¿No tienes cuenta? Registrate!
          {" "}
        </Link>
      </form>
    </div>
  );
};

export default FormikLogin;
