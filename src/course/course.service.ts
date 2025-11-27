import { Injectable } from '@nestjs/common';
import { Course } from './course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { upsertCourseDTO } from './dto/upsert.dto';

@Injectable()
export class CourseService {
    private course: Array<any>;
    
       constructor(
        @InjectRepository(Course)
               private courseRepository: Repository<Course>
           ) 
       {
    
         this.course = [
            {
                "id": 1,
                "nome": "Back-end",
                "aluno": "Jéssica",
                
            }
         ]
       }
    
        findAll() {
               return this.courseRepository.find();
           }
       
           async create(Course: upsertCourseDTO) {
              const newCourse = this.courseRepository.create(Course);
             await this.courseRepository.save(newCourse);
    
             return {
              "message": "Novo Curso!"
          };
    
           }
}
