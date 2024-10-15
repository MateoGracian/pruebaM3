import { Router } from 'express'; 
import { createUsers, getUsers, getUsersById } from "../controllers/usersControllers";

const usersRouter = Router(); 

usersRouter.post('/register', createUsers);

// usersRouter.post('/login', loginUsers);

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUsersById);

// usersRouter.delete('/', deleteUsers);

export default usersRouter ; 
