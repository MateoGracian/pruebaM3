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

const credentialsDB: ICredentials[] = [];
let id: number = 1; 

export const createCredentialsService = async (credentialsData: ICredentialsDto): Promise<number> => {
    
    const {username, password} = credentialsData;

    const newCredentials: ICredentials = {
        id, 
        username,
        password,
    };
    
    credentialsDB.push(newCredentials);
    id++; 
    return newCredentials.id;
}; 

export const checkCredentialsService = async (username: string, password: string): Promise<number | null> => {
    const credFound = credentialsDB.find((cred: ICredentials) => cred.username === username);
    if (!credFound) {
        console.error(`User with username ${username} not found`);
        return null;
    }
    if (credFound.password !== password) {
        console.error(`Password incorrect`);
        return null;
    }
    return credFound.id;
}

