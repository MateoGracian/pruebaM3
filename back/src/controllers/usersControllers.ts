import { Request, Response } from "express";
import {
  getUsersService,
  createUsersService,
  deleteUsersService,
} from "../services/usersService";
import IUser from "../interfaces/IUser";

//register a new user 

export const createUsers = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, credentialsId} = req.body;
    const newUser = await createUsersService({ name, email, birthdate, nDni, credentialsId});
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
  }
}; 

//login a new user 

export const loginUsers = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const users: IUser[] = await getUsersService();
    const user = users.find((user) => user.email === email);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send("Usuario no encontrado");
    console.error(error);
  }
};

//get all users 

export const getUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).json(users);
};

//get user by id 

export const getUsersById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const users: IUser[] = await getUsersService();
    const user = users.find((user) => user.id === parseInt(id));
    res.status(200).json(user);
}

//delete user by id 

export const deleteUsers = async (req: Request, res: Response) => {
    const { id } = req.body;
    await deleteUsersService(id);
    res.status(204).send("eliminado correctamente");
};

