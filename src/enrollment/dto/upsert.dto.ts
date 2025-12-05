import {IsNotEmpty } from "class-validator";

export class UpsertEnrollmentDTO{
     @IsNotEmpty()
        status: string;

     
     
}