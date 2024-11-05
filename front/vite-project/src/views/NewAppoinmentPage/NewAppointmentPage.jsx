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
            if (values.date && values.time) {
                const date = new Date(values.date + 'T' + values.time)
                const now = new Date()
                if (date < now) {
                    errors.date = 'La fecha y hora deben ser futuras'
                }
            }
            if(values.time){
                const time = values.time.split(':')
                if(time[0] < 9 || time[0] > 18){
                    errors.time = 'El horario de atención es de 9 a 18'
                }
            }
            if(values.date){
                const date = new Date(values.date)
                const day = date.getDay()
                if(day === 0 || day === 6){
                    errors.date = 'No se atiende los fines de semana'
                }
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