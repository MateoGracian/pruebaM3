import PropTypes from "prop-types"
import styles from './Appointment.module.css'

const Appointment = ({ date, time, status, handleCancelAppointment }) => {
    const appointmentDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const timeDifference = appointmentDateTime - now;
    const isWithin24Hours = timeDifference < 24 * 60 * 60 * 1000;     

    return (
        <div className={styles.card}>
            <p className={styles.info}>{date}</p>
            <p className={styles.info}>{time}</p>
            {status !== 'cancelled' && <p className={styles.status}>{status}</p>} {/* Mostrar solo si no está cancelado */}
            {status === 'cancelled' && <p className={styles.cancelled}>cancelled</p>}
            <button onClick={handleCancelAppointment} className={styles.cancelButton} disabled={isWithin24Hours}>Cancelar</button>
        </div>
    );
};



Appointment.propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    handleCancelAppointment: PropTypes.func.isRequired
}

export default Appointment