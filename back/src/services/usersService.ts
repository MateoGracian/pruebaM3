import IUser from '../interfaces/IUser';
import IUserDto from '../dto/userDto'; 
import { createCredentialsService } from './credentialsServices';
import ICredentials from '../interfaces/ICredentials';

export let users: IUser[] = [{
    id: 1,
    name: 'Pedro',
    email: 'pedro@email.com',
    birthdate: 1995,
    nDni: 87654321,
    credentialsId: {
        id: 1,
        username: 'pedro',
        password: 'pedro123'
    }
}];

let id: number = 2;

export const createUsersService = async (userData: IUserDto): Promise<IUser> => {
    const newCredentials: ICredentials = await createCredentialsService(userData.credentialsId);
    const newUser: IUser = {
        id: id++,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId: newCredentials
    };
    users.push(newUser);
    return newUser;
}; 

export const getUsersService = async (): Promise<IUser[]> => {
    return users;  
}

export const deleteUsersService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser) => {
        return user.id !== id; 
    });  
}
