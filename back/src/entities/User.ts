import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Credential } from "./Credential";
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

    @Column("date")
    birthdate: number

    @Column("int")
    nDni: number

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential

    @OneToMany(() => Appointment, (appointments) => appointments.user)
    appointments: Appointment[];
}
