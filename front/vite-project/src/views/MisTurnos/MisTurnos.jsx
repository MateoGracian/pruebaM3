import Appointment from "../../components/Appointment/Appointment";
import styles from './MisTurnos.module.css'
import axios from 'axios'; 
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const MisTurnos = () => {
    const [ appointments, setAppointments] = useState([]); 
    const { users, updateAppoinments } = useContext(UserContext);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        if(!users) {
            navigate('/');
            return;
        }

        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`http://localhost:7070/users/${users.id}`);
                if(JSON.stringify(response.data.appointments) !== JSON.stringify(appointments)) {
                    setAppointments(response.data.appointments); 
                    updateAppoinments(response.data.appointments);
                    console.log(response.data.appointments)
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchAppointments(); 
    }, [users, navigate, flag, updateAppoinments, appointments]); 

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
                    appointments?.map((appointment) => {
                        return (
                            <div key={appointment.id} className={styles.cardsContainer}>
                                <Appointment
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