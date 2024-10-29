import { useFormik } from "formik";
import validate from "../../helpers/validate";
import styles from "./FormikRegister.module.css";
import axios from "axios";
import PropTypes from "prop-types";

const FormikRegister = ({onClose}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      nDni: "",
      username: "",
      password: "",
    },
    validate, 
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const submitRegisterForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:7070/users/register", formik.values);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.formContainer}>
        <form onSubmit={formik.handleSubmit} className={styles.myForm}>
        <button className={styles.closeButton} onClick={onClose}>X</button>

        <h1 className={styles.title}>Sign Up</h1>
        
        <div className={styles.inputContainer}>
            <label>Nombre: </label>
            <input
                className={styles.userInput}
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={styles.errors}>{formik.errors.name}</div>
            ) : null}
        </div>

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
            <label htmlFor="email">Email: </label>
            <input
                className={styles.userInput}
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className={styles.errors}>{formik.errors.email}</div>
            ) : null}
        </div>

        <div className={styles.inputContainer}>
            <label>Birthdate: </label>
            <input
                className={styles.userInput}
                type="date"
                id="birthdate"
                name="birthdate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birthdate}
            />
            {formik.touched.birthdate && formik.errors.birthdate ? (
                <div className={styles.errors}>{formik.errors.birthdate}</div>
            ) : null}
        </div>

        <div className={styles.inputContainer}>
            <label>DNI: </label>
            <input
                className={styles.userInput}
                id="nDni"
                name="nDni"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nDni}
            />
            {formik.touched.nDni && formik.errors.nDni ? (
                <div className={styles.errors}>{formik.errors.nDni}</div>
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

        <button type="submit" className={styles.submitButton} onClick={submitRegisterForm}>Sign Up</button>
        </form>
    </div>
  );
};

FormikRegister.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default FormikRegister;
