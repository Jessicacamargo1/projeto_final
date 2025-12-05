import { Injectable, NotFoundException } from '@nestjs/common';
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
           "id": 10,
           "name": "Informática Profissional",
           "price": 750,
           "active": true

                
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
             async update(id: number, course: upsertCourseDTO) {
              const courseFound = await this.courseRepository.findOne({
              where: {id}
        })
        if(!courseFound) {
            throw new NotFoundException('Curso não encontrado!');
        }
        await this.courseRepository.update(id,course);
        
        
            return {
              "message": "Curso Atualizado!"
        };
    }

              async delete(id: number) {
        await this.courseRepository.delete(id);
         return {
           "message": "Curso marcado como inativo com sucesso.!"
      }
  }
           }
   
    


