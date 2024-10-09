import IAppointmentDto from "../dto/appointmentDto";
import { modelAppointment } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

//create an appointment 
export const createAppointmentsService = async (appointmentData: IAppointmentDto): Promise<Appointment> => {
    const appointment = await modelAppointment.create(appointmentData);
    appointment.status = 'active';
    const result = await modelAppointment.save(appointment);
    return result; 
};

//get all appointments 
export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments = await modelAppointment.find({
        relations: ['user']
    });
    return appointments; 
}; 

//get an appointment by id

export const getAppointmentsByIdService = async (id: number): Promise<Appointment> => {
    const appointment = await modelAppointment.findOne({
        where: { id }
    }); 

    if(!appointment) {
        throw new Error('No se ha encontrado el turno');
    }

    return appointment;     
}

//update an appointment status
export const updateAppointmentsService = async (id: number): Promise<Appointment> => {
    const appointment = await modelAppointment.findOne({
        where: { id },
        relations: ['user']
    });

    if(!appointment) {
        throw new Error('No se ha encontrado el turno');
    }

    appointment.status = 'cancelled';
    const result = await modelAppointment.save(appointment);
    return result; 
}
