import { Router } from 'express';
import { createAppointments, getAppointments, deleteAppointments, updateAppointments, getAppointmentsById } from "../controllers/appointmentsControllers"; 

const appointmentsRouter = Router();

appointmentsRouter.post('/schedule', createAppointments); 

appointmentsRouter.get('/', getAppointments); 

appointmentsRouter.get('/:id', getAppointmentsById);

appointmentsRouter.put('/:id', updateAppointments);

appointmentsRouter.delete('/', deleteAppointments); 

export default appointmentsRouter; 