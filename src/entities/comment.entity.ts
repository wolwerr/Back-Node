import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'comments' })
export class Comment {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email?: string;

    @Column({ name: 'password', type: 'varchar', length: 15 })
    password?: string;

    @Column({ name: 'message', type: 'varchar', length: 256 })
    message?: string;

    @Column({ name: 'inclusion_date', type: 'date' })
    inclusionDate?: Date | string;

    @Column({ name: 'logged_in', type: 'boolean' })
    loggedIn?: boolean;
}