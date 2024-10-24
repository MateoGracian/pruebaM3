import { useState, useEffect } from "react"
import Appointment from "../../components/Appointment/Appointment";
import styles from './MisTurnos.module.css'
import axios from 'axios'; 

const MisTurnos = () => {
    const [ appointments, setAppointments] = useState([]); 

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:7070/appointments');
                setAppointments(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchAppointments(); 
    }, []); 

    const handleCancelAppointment = (id) => {
        const newAppointments = appointments.map((appointment) => {
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