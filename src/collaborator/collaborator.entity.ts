import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Enrollment } from "../enrollment/enrollment.entity";


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

   @OneToMany(() => Enrollment, (enrollment) => enrollment.collaborator)
  enrollments: Enrollment[];
}
