import { Router } from "express";
import { createUsers, getUsers, deleteUsers } from "../controllers/usersControllers";

const router: Router = Router(); 

router.get('/users', ) 

router.post('/users', createUsers); 

router.delete('/users', ) 

export { router }; 