import { Request, Response } from "express";
import {
  getUsersService,
  createUsersService,
  getUserByIdService,
} from "../services/usersService";
import { User } from "../entities/User"; 

//register a new user 

export const createUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, birthdate, nDni, username, password} = req.body;

    if(!name || !email || !birthdate || !nDni || !username || !password) {
      return res.status(400).send("Faltan datos obligatorios");
    }

    const newUser = await createUsersService({ name, email, birthdate, nDni, username, password});
    
    return newUser
    ? res.status(201).json(newUser)
    : res.status(404).send("No se ha podido crear el usuario");
  } catch (error) {
    return res.status(404).send("No se ha podido crear el usuario"); 
  }
}; 

// login a new user 

// export const loginUsers = async (req: Request, res: Response): Promise<Response> => {  
//   try {
//   } catch (error) {
   
//   }
// };

//get all users 

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users: User[] = await getUsersService();
    
    return users
    ? res.status(200).json(users)
    : res.status(404).send("No se han podido cargar los usuarios");
  } catch (error) {
    return res.status(404).send("No se han podido cargar los usuarios");    
  }
};

//get user by id

export const getUsersById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(parseInt(id));
    
    return user
    ? res.status(200).json(user)
    : res.status(404).send("No se ha encontrado el usuario");
  } catch (error) {
    return res.status(404).send("No se ha encontrado el usuario");    
  }
}