import { User } from "../entities/User";

interface IAppointmentDto {
    date: string;
    time: string;
    user: User;
}

export default IAppointmentDto; 

//esta interface es para las pruebas en los controllers y services 