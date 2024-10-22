import { allAppointments } from "../helpers/myAppointments"
import { useState } from "react"
import Appointment from "../components/Appointment/Appointment";
import styles from './MisTurnos.module.css'

const MisTurnos = () => {
    const [ appointments, setAppointments] = useState(allAppointments); 

    const handleCancelAppointment = (id) => {
        const newAppointments = appointments.map((appointment) => {
            //! PEGAR LA RUTA DEL BACKEND PARA CAMBIAR EL ESTADO DEL TURNO
            if (appointment.id === id) {
                return {
                    ...appointment,
                    status: "cancelled"
                }
            }
            return appointment
        })
        setAppointments(newAppointments)

    }
    return (
        <>   
            <h2 className={styles.title}>Mis Turnos</h2>
            <div className={styles.infoContainer}>
                <p className={styles.info}>Fecha: </p>
                <p className={styles.info}>Hora: </p>
                <p className={styles.info}>Estado: </p>
            </div>
            {
                appointments.map((appointment) => {
                    return (
                        <div key={appointment.id} className={styles.cardsContainer}>
                            <Appointment
                                name={appointment.userId.name}
                                date={appointment.date}
                                time={appointment.time}
                                status={appointment.status}
                                handleCancelAppointment={() => handleCancelAppointment(appointment.id)}
                            />         
                        </div>
                    )
                })
            }
        </>
    )
}

export default MisTurnos