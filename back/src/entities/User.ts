import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credentials } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50
    })
    name: string

    @Column("text")
    email: string

    @Column({
        type: "date"
    })
    birthdate: Date

    @Column("int")
    nDni: number

    @OneToOne(() => Credentials, (credential) => credential.user, {cascade: true, onDelete: "CASCADE"})  
    @JoinColumn()
    credentials: Credentials

    @OneToMany(() => Appointment, (appointments) => appointments.userId)
    appointments: Appointment[]
}

