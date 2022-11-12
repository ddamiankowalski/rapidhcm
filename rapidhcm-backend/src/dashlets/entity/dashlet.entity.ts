import { User } from "src/users/entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Dashlet {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'bool' })
    isFavourite: boolean;

    @Column({ type: 'varchar' })
    dashletName: string;

    @ManyToOne(() => User, (user) => user.dashlet, { cascade: true })
    user: User;

    @Column({ type: 'int' })
    col: number;

    @Column({ type: 'int' })
    row: number; 

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}