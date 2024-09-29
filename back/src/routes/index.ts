import { Router } from "express";
import usersRouter from "../routes/usersRouter"; 
import appointmentsRouter from "../routes/appointmentsRouter";

const router: Router = Router(); 

router.use('/users', usersRouter); 

router.use("/appointments", appointmentsRouter);

export { router }; 