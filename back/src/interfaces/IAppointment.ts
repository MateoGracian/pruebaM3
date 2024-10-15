import Status from "../enums/enums"; 

interface IAppointment {
    id: number;
    date: Date;
    time: string;
    userId: number;
    status: Status;
}

export default IAppointment; 