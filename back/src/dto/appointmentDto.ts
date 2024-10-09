import Status from "../enums/enums";

interface IAppointmentDto {
    date: number;
    time: number;
    status: Status; 
}

export default IAppointmentDto; 

//esta interface es para las pruebas en los controllers y services 