import ICredentialsDto from '../dto/credentialsDto';
import { modelCredentials } from '../config/data-source';
import { Credentials } from '../entities/Credential';


export const createCredentialsService = async (credentials: ICredentialsDto): Promise<Credentials> => {
    const {username, password} = credentials;

    const newCredentials = modelCredentials.create({
        username, 
        password,
    });

    await modelCredentials.save(newCredentials); 
    return newCredentials;
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



