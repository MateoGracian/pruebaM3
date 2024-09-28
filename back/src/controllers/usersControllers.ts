import { Request, Response } from "express"
import { getUsersService, createUsersService, deleteUsersService } from "../services/usersService"

export const createUsers = async (req: Request, res: Response) => {
    try {
        const { name, email, active } = req.body
        const newUser = await createUsersService({ name, email, active })
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error); 
    }
}

export const getUsers = async () => {}

export const deleteUsers = async () => {}