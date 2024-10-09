import ICredentials from '../interfaces/ICredentials';
import ICredentialsDto from '../dto/credentialsDto';
import { modelCredentials } from '../config/data-source';

const credentialsDB: ICredentials[] = [];
let id: number = 1; 

export const createCredentialsService = async (credentialsData: ICredentialsDto): Promise<number> => {

    const credentials = await modelCredentials.create(credentialsData);
    const result = await modelCredentials.save(credentials); 
    return result.id; 
}; 

export const checkCredentialsService = async (username: string, password: string): Promise<number | null> => {
    
    const credFound = await modelCredentials.findOne({
        where: {
            username: username
        }
    })

    if (!credFound) {
        console.error(`User with username ${username} not found`);
        return null; 
    }
    
    if (credFound.password !== password) {
        console.error(`Password incorrect`);
        return null; 
    }
    
    return credFound.id;
} //* utilizar en el LOG IN 



