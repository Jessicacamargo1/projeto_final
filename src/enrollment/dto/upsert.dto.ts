import {IsNotEmpty } from "class-validator";

export class upsertEnrollmentDTO{
     @IsNotEmpty()
        status: string;

     
     
}