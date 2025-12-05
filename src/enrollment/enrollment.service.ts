import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Enrollment } from './enrollment.entity';
import { UpsertEnrollmentDTO } from './dto/upsert.dto';

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
           
               async create(Enrollment: UpsertEnrollmentDTO) {
                  const newEnrollment = this.enrollmentRepository.create(Enrollment);
                 await this.enrollmentRepository.save(newEnrollment);
        
                 return {
                  "message": "Nova Inscrição!"
              };
        
               }
}
