import IUser from '../interfaces/IUser';  
import IUserDto from '../dto/userDto'; 

const users: IUser[] = [];

let id: number = 1;

export const createUsersService = async (userData: IUserDto): Promise<IUser> => {
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active 
    };
    id++; 
    users.push(newUser);
    return newUser;
}; 

export const getUsersService = async () => {}

export const deleteUsersService = async () => {}