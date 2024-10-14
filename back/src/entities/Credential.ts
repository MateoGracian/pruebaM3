import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from "typeorm";
import { User } from "./User"; 

@Entity()
export class Credentials {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToOne(() => User, (user) => user.credentials)
    user: User;
}   