import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ length: 125 })
    username: string;
    
    @Column({ length: 36 })
    password: string;
}