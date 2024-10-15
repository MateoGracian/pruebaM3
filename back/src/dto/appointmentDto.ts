import { User } from "../entities/User";

interface IAppointmentDto {
    date: Date;
    time: string;
    userId: {id: number};
}

export default IAppointmentDto; 

//esta interface es para las pruebas en los controllers y services 