import { PrimaryGeneratedColumn, Column, OneToMany, Entity, ManyToOne } from "typeorm";
import  Status  from "../enums/enums";
import { User } from "./User"; 

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string //! cambiar a tipo Date

    @Column()
    time: string //! cambiar a tipo Date 

    @Column()
    status: Status 

    @ManyToOne(() => User, (user) => user.appointments)
    user: User
}