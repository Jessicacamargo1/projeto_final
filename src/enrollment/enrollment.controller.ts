import { Controller, Get } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
    constructor(private readonly enrollmentService: EnrollmentService) {}
            
            @Get(':id/enrollments')
            findAll() {
                return this.enrollmentService.findAll()
                
            }
}
