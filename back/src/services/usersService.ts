import IUserDto from '../dto/userDto'; 
import { createCredentialsService } from './credentialsServices';
import { modelCredentials, modelUser } from '../config/data-source'; 
import { User } from '../entities/User';

//create a new User 

export const createUsersService = async (userData: IUserDto): Promise<User> => {
    const {name, email, username, password, birthdate, nDni} = userData;
    
    const newCreds = await createCredentialsService({ username, password });
    
    const newUser = modelUser.create({
        name,
        email,
        birthdate,
        nDni,
        credentials: newCreds,
    });

    newCreds.user = newUser;

    await modelUser.save(newUser);
    await modelCredentials.save(newCreds);

    return newUser;  
}; 

//Get all users

export const getUsersService = async (): Promise<User[]> => {
    const users = await modelUser.find({
        relations: {appointments: true, credentials: true}
    });

    return users; 
}

//get user by id 

export const getUserByIdService = async (id: number): Promise<User> => {
    const user = await modelUser.findOne({
       where: {id},
       relations: ['appointments', 'credentials'] 
    })
    
    if (!user) {
        throw new Error('No se ha encontrado el usuario'); 
    } 

    return user; 
}