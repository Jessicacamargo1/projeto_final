import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Course{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string;

    @Column('decimal', {precision: 10, scale: 2})
     price: number;

     @Column()
     name: string;
     
     @Column()
     active: string


  collaborators: any;
    enrollments: any;
}