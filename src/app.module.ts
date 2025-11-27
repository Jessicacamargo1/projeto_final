import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { CollaboratorModule } from './collaborator/collaborator.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // padrão
      username: 'root',
      password: '',
      database: 'projeto_final',
      autoLoadEntities: true,
      synchronize: true,  
    }),
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    

    }),
    CourseModule,
    EnrollmentModule,
    CollaboratorModule,
    
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
