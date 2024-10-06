import IAppointment from "../interfaces/IAppointment";
import IAppointmentDto from "../dto/appointmentDto";

let appointments: IAppointment[] = [
    {
        id: 1,
        date: '2021-10-10',
        time: '10:00',
        status: 'active',
        userId: 1
    },
    {
        id: 2,
        date: '2021-10-10',
        time: '11:00',
        status: 'active',
        userId: 3
    },
    {
        id: 3,
        date: '2021-10-10',
        time: '12:00',
        status: 'active',
        userId: 2
    },
    {
        id: 4,
        date: '2021-10-10',
        time: '13:00',
        status: 'active',
        userId: 1
    }
]; 

let id: number = 1; 


//create an appointment 
export const createAppointmentsService = async (appointmentData: IAppointmentDto): Promise<IAppointment> => {
    const newAppointment: IAppointment = {
        id,
        date: appointmentData.date,
        time: appointmentData.time,
        status: appointmentData.status,
        userId: appointmentData.userId
    };
    newAppointment.status = 'active';
    id++; 
    appointments.push(newAppointment);
    return newAppointment;
};

//get all appointments 
export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;  
}; 

// //get an appointment by id
// export const getAppointmentsByIdService = async (id: number): Promise<IAppointment | null> => {
//     const appointment = appointments.find((appointment: IAppointment) => appointment.id === id);
    
//     if (!appointment) {
//         console.error(`Appointment with id ${id} not found`);
//         return null; 
//     }

//     return appointment; 
// }

//update an appointment status
export const updateAppointmentsService = async (id: number): Promise<IAppointment | null> => {
    const appointment = appointments.find((appointment: IAppointment) => appointment.id === id);
    
    if (!appointment) {
        console.error(`Appointment with id ${id} not found`);
        return null; 
    }

    appointment.status = 'cancelled';   
    return appointment; 
};

//delete an appointment 
export const deleteAppointmentsService = async (id: number): Promise<void> => {
    appointments = appointments.filter((appointment: IAppointment) => {
        return appointment.id !== id; 
    }); 
}; 