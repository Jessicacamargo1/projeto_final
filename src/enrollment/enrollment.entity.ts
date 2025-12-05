import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,  } from 'typeorm';
import { Course } from '../course/course.entity';
import { Collaborator } from '../collaborator/collaborator.entity';


@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  courseId: number;
  collaboratorId: number;




   @ManyToOne(() => Course, (course) => course.enrollments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'course_id' })
  course: Course;                

  @ManyToOne(() => Collaborator, (collab) => collab.enrollments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'collaborator_id' })
  collaborator: Collaborator; 


}
    