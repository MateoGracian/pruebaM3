import PropTypes from "prop-types"

const Appointment = ({name, date, time, status, handleCancelAppointment}) => {
    return (
        <>
            <h3>Nombre: {name}</h3>
            <p>Fecha: {date}</p>
            <p>Horario: {time}</p>
            <p>Estado: {status}</p>
            <button onClick={handleCancelAppointment}>Cancelar</button>
        </>
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