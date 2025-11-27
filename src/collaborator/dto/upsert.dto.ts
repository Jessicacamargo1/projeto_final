import { IsEmail, IsNotEmpty } from "class-validator";

export class upsertCollaboratorDTO{
     @IsNotEmpty()
        name: string;

     @IsEmail()
      @IsNotEmpty()
        email: string;
        
     @IsNotEmpty()
        idade: number;
     
}