import { useFormik } from "formik";
import styles from "./FormikLogin.module.css";
import axios from "axios";
import PropTypes from "prop-types";

const FormikLogin = ({ onClose }) => {
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
      try {
        const response = await axios.post(
          "http://localhost:7070/users/login",
          values
        );
        console.log("Login exitoso:", response.data);
        resetForm();
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    },
  });

  return (
    <div className={styles.formContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.myForm}>
        <button className={styles.closeButton} onClick={onClose}>X</button>

        <h1 className={styles.title}>Login</h1>

        <div className={styles.inputContainer}>
          <label>Usuario: </label>
          <input
            className={styles.userInput}
            id="username"
            name="username"
            type="text"
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.errors}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
};

FormikLogin.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default FormikLogin;
