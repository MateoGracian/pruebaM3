import PropTypes from "prop-types"
import styles from './Appointment.module.css'

const Appointment = ({name, date, time, status, handleCancelAppointment}) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}> {name}</h3>
            <p className={styles.info}> {date}</p>
            <p className={styles.info}> {time}</p>
            <p className={styles.status}> {status}</p>            
            <button onClick={handleCancelAppointment} className={styles.cancelButton}>Cancelar</button>
        </div>
    )
}


Appointment.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    handleCancelAppointment: PropTypes.func.isRequired
}

export default Appointment