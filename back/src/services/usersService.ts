import IUserDto from '../dto/userDto'; 
import { createCredentialsService } from './credentialsServices';
import { modelUser } from '../config/data-source'; 
import { User } from '../entities/User';

export const createUsersService = async (userData: IUserDto): Promise<User> => {
    
    const credentials = await createCredentialsService({
        username: userData.username, 
        password: userData.password
    });
    
    const user = await modelUser.create({
        ...userData, 
        credentialsId: credentials
    });
    const result = await modelUser.save(user); 
    return result; 
}; 

export const getUsersService = async (): Promise<User[]> => {
    const users = await modelUser.find({
        relations: ['credentials']
    });
    return users; 
}

export const getUserByIdService = async (id: number): Promise<User> => {
    const user = await modelUser.findOneBy({
        id: id 
    })
    
    if (!user) {
        throw new Error('No se ha encontrado el usuario'); 
    } 

    return user; 
}