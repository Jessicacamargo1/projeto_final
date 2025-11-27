import {IsNotEmpty } from "class-validator";

export class upsertCourseDTO{
     @IsNotEmpty()
        name: string;

      @IsNotEmpty()
        descricao: string;
        
     @IsNotEmpty()
        duracao: number;
     
}