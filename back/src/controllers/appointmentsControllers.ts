import { Request, Response } from "express";
import { createAppointmentsService, getAppointmentsService, updateAppointmentsService, getAppointmentsByIdService } from "../services/appointmentsService";
import { Appointment } from "../entities/Appointment"; 

//create an appointment 

export const createAppointments = (req: Request, res: Response) => {
    try {
        const { date, time, user } = req.body;
        const newAppointment = createAppointmentsService({ date, time, user });
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(404).send("No se han podido cargar los turnos");
    }
}; 

//get all appointments 

export const getAppointments = async (req: Request, res: Response): Promise<Response> => {
    const appointments: Appointment[] = await getAppointmentsService();
    return res.status(200).json(appointments);
}; 

//get an appointment by id 

export const getAppointmentsById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const appointment: Appointment = await getAppointmentsByIdService(parseInt(id));
    return res.status(200).json(appointment);
}; 

//update an appointment 

export const updateAppointments = async (req: Request, res: Response): Promise<Response>=> {
    const { id } = req.params;
    const appointment = updateAppointmentsService(parseInt(id));
    return res.status(200).json(appointment);
}; 

