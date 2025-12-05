import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Enrollment } from "../enrollment/enrollment.entity";


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

@OneToMany(() => Enrollment, (enrollment) => enrollment.course)
enrollments: Enrollment[]
 

}