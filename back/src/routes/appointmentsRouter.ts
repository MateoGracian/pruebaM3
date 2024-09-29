import { Router } from 'express';
import { createAppointments, getAppointments, deleteAppointments, updateAppointments, getAppointmentsById } from "../controllers/appointmentsControllers"; 

const appointmentsRouter = Router();

appointmentsRouter.post('/schedule', createAppointments); 

appointmentsRouter.get('/', getAppointments); 

appointmentsRouter.get('/:id', getAppointmentsById);

appointmentsRouter.put('/cancel', updateAppointments);

appointmentsRouter.delete('/', deleteAppointments); 

export default appointmentsRouter; 