import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { User } from "./User"; 

@Entity()
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    username: string;

    @Column({
        length: 50
    })
    password: string;

}   