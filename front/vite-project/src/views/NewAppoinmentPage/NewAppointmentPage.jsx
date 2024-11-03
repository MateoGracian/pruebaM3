import styles from './NewAppointmentPage.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'


const NewAppointmentPage = () => {
    const { users } = useContext(UserContext); 
    const navigate = useNavigate(); 

    useEffect(() => {
        if (!users) {
            navigate('/login')
        }
    }, [users, navigate]) 

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            userId: users ? users.id : '' 
        },
        validate: (values) => {
            const errors = {}
            if (!values.date) {
                errors.date = 'La fecha es requerida'
            }
            if (!values.time) {
                errors.time = 'La hora es requerida'
            }
            return errors
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('http://localhost:7070/appointments/schedule', values)
                console.log(response)
                resetForm()
                navigate('/mis-turnos')
            } catch (error) {
                console.error(error)
            }
        },
    })

    if (!users) {
        return <div>Cargando...</div>
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={formik.handleSubmit} className={styles.myForm}>
                <h1 className={styles.title}>Agendar Turno</h1>
                <div className={styles.inputContainer}>
                    <label>Fecha: </label>
                    <input
                        type="date"
                        name="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        className={styles.input}
                    />
                    {formik.errors.date ? <div className={styles.errors}>{formik.errors.date}</div> : null}
                </div>
                <div className={styles.inputContainer}>
                    <label>Hora: </label>
                    <input
                        type="time"
                        name="time"
                        onChange={formik.handleChange}
                        value={formik.values.time}
                        className={styles.input}
                    />
                    {formik.errors.time ? <div className={styles.errors}>{formik.errors.time}</div> : null}
                </div>
                <button type="submit" className={styles.submitButton}>
                    Agendar
                </button>
            </form>
        </div>
    )
}

export default NewAppointmentPage