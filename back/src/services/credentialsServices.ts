//Implementar una función que reciba username y password y 
//cree un nuevo par de credenciales con estos datos. 
//Debe retornar el ID del par de credenciales creado.

//Implementar una función que recibirá username y password, 
//y deberá chequear si el nombre de usuario existe entre 
//los datos disponibles y, si es así, si el password es correcto. 
//En caso de que la validación sea exitosa, 
//deberá retornar el ID de las credenciales. 

import ICredentials from '../interfaces/ICredentials';
import ICredentialsDto from '../dto/credentialsDto';
import { users } from '../services/usersService'
import IUser from '../interfaces/IUser';

export const createCredentialsService = async (credentialsData: ICredentialsDto): Promise<ICredentials> => {
    const newCredentials: ICredentials = {
        id: users.length + 1,
        username: credentialsData.username,
        password: credentialsData.password
    };
    return newCredentials;
}; 

export const checkCredentialsService = async (username: string, password: string): Promise<number | null> => {
    const user = users.find((user: IUser) => user.credentialsId.username === username);
    if (!user) {
        console.error(`User with username ${username} not found`);
        return null;
    }
    if (user.credentialsId.password !== password) {
        console.error(`Password incorrect`);
        return null;
    }
    return user.id;
}