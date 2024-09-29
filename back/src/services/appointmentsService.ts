import IAppointment from "../interfaces/IAppointment";
import IAppointmentDto from "../dto/appointmentDto";

let appointments: IAppointment[] = []; 

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