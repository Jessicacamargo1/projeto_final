import { Injectable } from '@nestjs/common';
import { Enrollment } from './enrollment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { upsertEnrollmentDTO } from './dto/upsert.dto';

@Injectable()
export class EnrollmentService {
    private enrollment: Array<any>;
        
           constructor(
            @InjectRepository(Enrollment)
                   private enrollmentRepository: Repository<Enrollment>
               ) 
           {
        
             this.enrollment = [
                {
                    "id": 1,
                    "nome": "Back-end",
                    "aluno": "Jéssica",
                    
                }
             ]
           }
        
            findAll() {
                   return this.enrollmentRepository.find();
               }
           
               async create(Enrollment: upsertEnrollmentDTO) {
                  const newEnrollment = this.enrollmentRepository.create(Enrollment);
                 await this.enrollmentRepository.save(newEnrollment);
        
                 return {
                  "message": "Nova Inscrição!"
              };
        
               }
}
