import { Entity, PrimaryGeneratedColumn,  } from 'typeorm';


@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;
}