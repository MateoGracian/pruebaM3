import ICredentialsDto from "./credentialsDto";

interface IUserDto {
    name: string;
    email: string;
    birthdate: number;
    nDni: number;
    username: string;
    password: string;
}

export default IUserDto; 

//esta interface es para las pruebas en los controllers y services 
//ya que no se necesita el id para las pruebas 