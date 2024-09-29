import Status from "../enums/enums";

interface IAppointmentDto {
    date: string;
    time: string;
    status: Status; 
    userId: number;
}

export default IAppointmentDto; 

//esta interface es para las pruebas en los controllers y services 