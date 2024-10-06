import ICredentials from "./ICredentials";

interface IUser {
    id: number; 
    name: string;
    email: string;
    birthdate: number;
    nDni: number;  
    credentialsId: ICredentials; 
}

// export interface IUserWithCredentials extends IUser {
//     credentialsId: ICredentials; 
// }

export default IUser; 