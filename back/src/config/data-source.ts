import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "*Matador15",
    database: "proyectom3-database",
    synchronize: true,
    logging: true,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
}); 

export const modelUser = AppDataSource.getRepository(User); 