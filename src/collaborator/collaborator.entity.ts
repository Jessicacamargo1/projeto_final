import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Collaborator{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string;

    @Column('decimal', {precision: 10, scale: 2})
     idade: number;

     @Column()
     nome: string;
}