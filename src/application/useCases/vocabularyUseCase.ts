import { Inject, Injectable } from "@nestjs/common";
import type {IVocabularyRepository} from "../../domain/repositories/IVocabularyRepository.js";

@Injectable()
export class VocabularyUseCase { 
    constructor(@Inject('IVocabularyRepository') 
    private readonly vocabularyRepository: IVocabularyRepository){

    }

    async execute(payload:any):Promise<any>{
        // mapper entity
        const exists = await this.vocabularyRepository.existsByEventId(payload.eventId);
        if(exists){
            return null;
        }
        return this.vocabularyRepository.save(payload);
    }
 }