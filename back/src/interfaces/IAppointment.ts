import Status from "../enums/enums"; 

interface IAppointment {
    id: number;
    date: string;
    time: string;
    status: Status;
    userId: number;
}

export default IAppointment; 