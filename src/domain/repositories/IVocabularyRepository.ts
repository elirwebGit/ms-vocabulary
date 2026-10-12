import { VocabularyDocument } from "../entities/vocabularies.js";

export interface IVocabularyRepository{
    save(vocabulary:VocabularyDocument):Promise<boolean>;
    searchVocabulary(word:string):Promise<any>;
    existsByEventId(eventId:string):Promise<boolean>;
}