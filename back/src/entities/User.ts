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

    @Column("int")
    birthdate: number

    @Column("int")
    nDni: number

    @OneToOne(() => Credentials, (credential) => credential.user, {cascade: true, onDelete: "CASCADE"})  
    @JoinColumn()
    credentials: Credentials

    @OneToMany(() => Appointment, (appointments) => appointments.user)
    appointments: Appointment[]
}

