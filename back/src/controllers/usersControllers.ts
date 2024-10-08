import { Request, Response } from "express";
import {
  getUsersService,
  createUsersService,
  deleteUsersService,
} from "../services/usersService";
import IUser from "../interfaces/IUser";

//register a new user 

export const createUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, birthdate, nDni, username, password} = req.body;
    const newUser = await createUsersService({ name, email, birthdate, nDni, username, password});
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(404).send("No se han podido cargar los usuarios"); 
  }
}; 

//login a new user 

export const loginUsers = async (req: Request, res: Response): Promise<Response> => {  
  try {
    const { email } = req.body;
    const users: IUser[] = await getUsersService();
    const user = users.find((user) => user.email === email);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).send("Usuario no encontrado");
  }
};

//get all users 

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const users: IUser[] = await getUsersService();
  return res.status(200).json(users);
};

//get user by id //!HACER QUE UTILIZE EL getUserByIdService y no el getUsersService

export const getUsersById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const users: IUser[] = await getUsersService();
    const user = users.find((user) => user.id === parseInt(id));
    return res.status(200).json(user);
}

//delete user by id 

export const deleteUsers = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;
    await deleteUsersService(id);
    return res.status(204).send("eliminado correctamente");
};

