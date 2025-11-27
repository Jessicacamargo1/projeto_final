import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Course{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string;

    @Column('decimal', {precision: 10, scale: 2})
     duracao: number;

     @Column()
     nome: string;
}