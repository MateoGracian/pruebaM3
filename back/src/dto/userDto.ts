import ICredentialsDto from "./credentialsDto";

interface IUserDto {
    name: string;
    email: string;
    birthdate: number;
    nDni: number;
    credentialsId: ICredentialsDto;
}

export default IUserDto; 

//esta interface es para las pruebas en los controllers y services 
//ya que no se necesita el id para las pruebas 