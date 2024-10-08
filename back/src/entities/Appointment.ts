import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";
import  Status  from "../enums/enums";
import { User } from "./User"; 

Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column("date")
    date: number;

    @Column("time")
    time: number;

    @Column()
    status: Status; 

    @OneToMany(() => User, (user) => user.appointments)
    user: User; 
}