import { User } from "src/users/entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    firstName: string;

    @Column({ type: 'varchar' })
    lastName: string;

    @Column({ default: true, update: false })
    isActive: boolean;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    telephone: string;

    @Column({ type: 'varchar' })
    positionName: string;

    @Column({ type: 'uuid' })
    assignedTo: string;

    @ManyToOne(() => User, (user) => user.candidate, { cascade: true })
    user: User;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}