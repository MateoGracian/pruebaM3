import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credentials } from "../entities/Credential";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER} from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    //dropSchema: true,
    synchronize: true,
    logging: true,
    entities: [User, Appointment, Credentials],
    subscribers: [],
    migrations: [],
}); 

export const modelUser = AppDataSource.getRepository(User); 
export const modelCredentials = AppDataSource.getRepository(Credentials); 
export const modelAppointment = AppDataSource.getRepository(Appointment); 