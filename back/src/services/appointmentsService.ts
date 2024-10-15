import IAppointmentDto from "../dto/appointmentDto";
import {
  modelAppointment,
  modelUser,
  queryRunner,
  AppDataSource,
} from "../config/data-source";
import { Appointment } from "../entities/Appointment";

//create an appointment
export const createAppointmentsService = async (
  appointmentData: IAppointmentDto
): Promise<Appointment | null> => {
  const { date, time, userId } = appointmentData;
  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  if (!userId) {
    throw new Error("No se ha encontrado el usuario");
  }

  try {
    const existingAppointment = await queryRunner.manager.findOne(
      modelAppointment.target,
      {
        where: {
          date,
          userId,
        },
      }
    );

    if (existingAppointment) {
      throw new Error("Ya existe un turno en esta fecha");
    }

    const newAppointment = modelAppointment.create({
      date,
      time,
      userId,
    });

    newAppointment.status = "active";

    await queryRunner.manager.save(newAppointment);
    await queryRunner.commitTransaction();
    
    return newAppointment;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    console.error("Error creando el turno:", error);
    return null;
  } finally {
    await queryRunner.release();
  }
};

//get all appointments
export const getAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await modelAppointment.find({
    relations: ["userId"],
  });
  return appointments;
};

//get an appointment by id

export const getAppointmentsByIdService = async (
  id: number
): Promise<Appointment | null> => {
    const appointment = await modelAppointment.findOne({
      where: { id },
      relations: ["userId"],
    });
  
    if (!appointment) {
      throw new Error("No se ha encontrado el turno");
    }
  
    return appointment; 
};

//update an appointment status
export const updateAppointmentsService = async (
  id: number
): Promise<Appointment> => {
  
  const appointment = await modelAppointment.findOne({
    where: { id },
    relations: ["userId"],
  });

  if (!appointment) {
    throw new Error("No se ha encontrado el turno");
  } 

  appointment.status = "cancelled";
  const result = await modelAppointment.save(appointment);
  return result;
};
