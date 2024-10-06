import Status from "../enums/enums"; 

interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: Status;
}

export default IAppointment; 