import { Router } from 'express';
import { createAppointments, getAppointments, deleteAppointments } from "../controllers/appointmentsControllers"; 

const appointmentsRouter = Router();

appointmentsRouter.post('/schedule ', createAppointments); 

appointmentsRouter.get('/', getAppointments); 

appointmentsRouter.get('/:id', getAppointments);

appointmentsRouter.put('/cancel', getAppointments);

appointmentsRouter.delete('/', deleteAppointments); 

export default appointmentsRouter; 