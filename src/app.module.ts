import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'projeto_final',
      autoLoadEntities: true,
      synchronize: true,
    }),

    ConfigModule.forRoot({
      envFilePath: [
         '.env.${process.env.NODE_ENV}',
    '.env',
  ],
      
    }),

    CourseModule,
    EnrollmentModule,
    CollaboratorModule,
    AuthModule,
    UsersModule,
  ],

  controllers: [AppController],

  providers: [
    AppService,

 
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
