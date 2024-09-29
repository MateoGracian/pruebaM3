import IUser from '../interfaces/IUser';  
import IUserDto from '../dto/userDto'; 

let users: IUser[] = [{
    id: 0,
    name: 'Juan',
    email: 'juan@email.com', 
} as IUser, {
    id: 1,
    name: 'Pedro',
    email: 'pedro@email.com', 
} as IUser];

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

export const getUsersService = async (): Promise<IUser[]> => {
    return users;  
}

export const deleteUsersService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser) => {
        return user.id !== id; 
    });  
}