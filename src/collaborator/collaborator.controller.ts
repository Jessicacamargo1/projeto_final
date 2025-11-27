import { Controller, Get } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';

@Controller('collaborator')
export class CollaboratorController {
    constructor(private readonly collaboratorService: CollaboratorService) {}
    
    @Get()
    findAll() {
        return this.collaboratorService.findAll()
        
    }
}


        
    