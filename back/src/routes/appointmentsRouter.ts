import { Router } from 'express';
import { createAppointments, getAppointments, updateAppointments, getAppointmentsById } from "../controllers/appointmentsControllers"; 

const appointmentsRouter = Router();

appointmentsRouter.post('/schedule', createAppointments); 

appointmentsRouter.get('/', getAppointments); 

appointmentsRouter.get('/:id', getAppointmentsById);

appointmentsRouter.put('/:id', updateAppointments);


export default appointmentsRouter; 