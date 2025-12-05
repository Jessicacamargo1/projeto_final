import { Injectable,  } from "@nestjs/common";
import { Collaborator } from "./collaborator.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { upsertCollaboratorDTO } from "./dto/upsert.dto";

@Injectable()
export class CollaboratorService {
    async findByEmail(email: string): Promise<Collaborator | null> {
  return this.collaboratorRepository.findOne({ where: { email } });
}

    buscarPorEmail(email: string) {
        throw new Error('Method not implemented.');
    }
   private collaborator: Array<any>;

   constructor(
    @InjectRepository(Collaborator)
           private collaboratorRepository: Repository<Collaborator>
       ) 
   {

     this.collaborator = [
        {
            "id": 1,
            "nome": "Jéssica",
            "email": "jessica@gmail.com",
            "idade": 16
        }
     ]
   }

    findAll() {
           return this.collaboratorRepository.find();
       }
   
       async create(Collaborator: upsertCollaboratorDTO) {
          const newCollaborator = this.collaboratorRepository.create(Collaborator);
         await this.collaboratorRepository.save(newCollaborator);

         return {
          "message": "Novo Colaborador!"
      };

       }
    }

