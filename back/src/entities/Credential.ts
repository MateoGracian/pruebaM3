import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

Entity()
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