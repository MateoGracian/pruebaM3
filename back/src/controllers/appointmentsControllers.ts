import { Request, Response } from "express";
import {
  createAppointmentsService,
  getAppointmentsService,
  updateAppointmentsService,
  getAppointmentsByIdService,
} from "../services/appointmentsService";
import { Appointment } from "../entities/Appointment";
import { error } from "console";

//create an appointment

export const createAppointments = async (req: Request, res: Response) => {
  try {
    const { date, time, userId } = req.body;

    if (!date || !time || !userId) {
      console.error(error);
      return res.status(400).send("Faltan datos obligatorios");
    }

    const newAppointment = await createAppointmentsService({ date, time, userId }) 
    console.log(newAppointment);

    return newAppointment
    ? res.status(201).json(newAppointment)
    : res.status(404).send("No se ha podido crear el turno"); 
  } catch (error) {
    res.status(404).send("No se han podido cargar los turnos");
  }
};

//get all appointments

export const getAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const appointments: Appointment[] = await getAppointmentsService();
    
    return appointments 
    ? res.status(200).json(appointments)
    : res.status(404).send("No se han podido cargar los turnos");
  } catch (error) {
    return res.status(404).send("No se han podido cargar los turnos");
  }
};

//get an appointment by id

export const getAppointmentsById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const appointment = await getAppointmentsByIdService(parseInt(id));
    
    return appointment 
    ? res.status(200).json(appointment)
    : res.status(404).send("No se ha encontrado el turno"); 
  } catch (error) {
    return res.status(404).send("No se ha encontrado el turno");
  }
};

//update an appointment

export const updateAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const appointment = updateAppointmentsService(parseInt(id));
    
    
    return appointment 
    ? res.status(200).json(appointment)
    : res.status(404).send("No se ha encontrado el turno");
  } catch (error) {
    return res.status(404).send("No se ha encontrado el turno");
  }
};