import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpsertEnrollmentDTO } from './dto/upsert.dto';
import { Enrollment } from './enrollment.entity';


@Injectable()
export class EnrollmentService {
    constructor(
        @InjectRepository(Enrollment)
        private enrollmentRepository: Repository<Enrollment>
    ) {}

    findAll() {
        return this.enrollmentRepository.find();
    }

    async create(data: UpsertEnrollmentDTO) {
        const newEnrollment = {
            course: { id: data.courseId },
            collaborator: { id: data.collaboratorId }
        };

        const entity = this.enrollmentRepository.create(newEnrollment);
        await this.enrollmentRepository.save(entity);

        return { message: "Nova inscrição!" };
    }

    // ✅ Método que retorna todas as matrículas de um curso
    async findByCourse(courseID: number): Promise<Enrollment[]> {
        return this.enrollmentRepository.find({
            where: { course: { id: courseID } },
            relations: ['course', 'collaborator'],
        });
    }
}
