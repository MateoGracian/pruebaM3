import { Request, Response } from "express";
import { createAppointmentsService, getAppointmentsService, deleteAppointmentsService, updateAppointmentsService } from "../services/appointmentsService";
import IAppointment from "../interfaces/IAppointment"; 

//create an appointment 

export const createAppointments = (req: Request, res: Response) => {
    try {
        const { date, time,status, userId } = req.body;
        const newAppointment = createAppointmentsService({ date, time, status, userId });
        res.status(201).json(newAppointment);
    } catch (error) {
        console.error(error);
    }
}; 

//get all appointments 

export const getAppointments = async (req: Request, res: Response) => {
    const appointments: IAppointment[] = await getAppointmentsService();
    res.status(200).json(appointments);
}; 

//get an appointment by id 

export const getAppointmentsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const appointments: IAppointment[] = await getAppointmentsService();
    const appointment = appointments.find((appointmen) => appointmen.id === parseInt(id));
    res.status(200).json(appointment);
}; 

//update an appointment 

export const updateAppointments = async (req: Request, res: Response) => {
    const { id } = req.body;
    const appointment = updateAppointmentsService(parseInt(id));
    res.status(200).json(appointment);
}; 

//delete an appointment 

export const deleteAppointments = async (req: Request, res: Response) => {
    const { id } = req.params;
    deleteAppointmentsService(parseInt(id));
    res.status(204).send("eliminado correctamente"); 
};