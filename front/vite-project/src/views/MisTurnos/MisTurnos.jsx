import { useState, useEffect } from "react"
import Appointment from "../../components/Appointment/Appointment";
import styles from './MisTurnos.module.css'
import axios from 'axios'; 
import { Link } from "react-router-dom";

const MisTurnos = () => {
    const [ appointments, setAppointments] = useState([]); 
    const [flag, setFlag] = useState(false);

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
    }, [flag]); 

    const handleCancelAppointment = (id) => {
        const cancelAppointment = async () => {
            try {
                await axios.put(`http://localhost:7070/appointments/cancel/${id}`);
                setAppointments(appointments.filter(appointment => appointment.id !== id))
                setFlag(!flag)
            } catch (error) {
                console.error(error);
            }
        }
        cancelAppointment();
    }

    return (
        <>
            <div className={styles.appointmentsContainer}>
            <h1 className={styles.title}>Mis Turnos</h1>
                {appointments.length === 0 && <div className={styles.container}><p className={styles.NoTurnsAdvert}> No tienes turnos agendados </p> <button className={styles.scheduleButton}><Link to="/agendar-turno"> AGENDA TU PRIMER TURNO AQUI! </Link></button></div>}
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
            </div>
    </>
    )
}

export default MisTurnos