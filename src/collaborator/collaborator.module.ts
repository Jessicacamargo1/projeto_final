import { Module } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from './collaborator.entity';


@Module({
  imports: [TypeOrmModule.forFeature([
    Collaborator
  ])],
  providers: [CollaboratorService],
  controllers: [CollaboratorController]
})
export class CollaboratorModule {}

