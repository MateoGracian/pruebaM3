import IUser from '../interfaces/IUser';
import IUserDto from '../dto/userDto'; 
import { createCredentialsService } from './credentialsServices';

export let usersDB: IUser[] = [];

let id: number = 2;

export const createUsersService = async (userData: IUserDto): Promise<IUser> => {
    
    const {name, email, birthdate, nDni, username, password} = userData; 

    const newCredentials = await createCredentialsService({username, password});
   
    const newUser: IUser = {
        id,
        name,
        email,
        birthdate,
        nDni,
        credentialsId: newCredentials,
    };

    usersDB.push(newUser);
    id++; 
    return newUser;
}; 

export const getUsersService = async (): Promise<IUser[]> => {
    return usersDB;  
}

//!agregar un getUserByIdService 

// export const getUserByIdService = async (id: number): Promise<IUser | null> => {}

export const deleteUsersService = async (id: number): Promise<void> => {
    usersDB = usersDB.filter((user: IUser) => {
        return user.id !== id; 
    });  
}
