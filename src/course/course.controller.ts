import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { upsertCourseDTO } from './dto/upsert.dto';

@Controller('course')
export class CourseController {
 
    constructor(private readonly courseService: CourseService) {}
        
        @Get()
        findAll() {
            return this.courseService.findAll()
             
        }
        @Post('/')
        create(@Body() courseBody: upsertCourseDTO) {
           return this.courseService.create(courseBody);
    }

    @Put(':id')
        update(@Param('id') courseID: number, @Body() updateBody: upsertCourseDTO) {
            return this.courseService.update(courseID, updateBody);
        }

       @Delete(':id')
            delete(@Param('id') courseID: number) {
                return this.courseService.delete(courseID);
            }
}
