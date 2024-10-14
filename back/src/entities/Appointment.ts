import { PrimaryGeneratedColumn, Column, OneToMany, Entity, ManyToOne, JoinColumn } from "typeorm";
import  Status  from "../enums/enums";
import { User } from "./User"; 
import { stat } from "fs";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "date"
    })
    date: Date 

    @Column()
    time: string  

    @Column()  //! Usar enum y no type, definir valor por defecto
    status: Status 

    @ManyToOne(() => User, (user) => user.appointments)
    user: User
}