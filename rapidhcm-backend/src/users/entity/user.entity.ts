import { Candidate } from "src/candidates/entity/candidate.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 125, unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;
    
    @Column({ nullable: false })
    password: string;

    @OneToMany(() => Candidate, (candidate) => candidate.user)
    candidate: Candidate[]

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}