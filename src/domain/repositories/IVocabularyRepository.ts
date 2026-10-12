import { VocabularyDocument } from "../entities/vocabularyDocument.js";

export interface IVocabularyRepository{
    save(vocabulary:VocabularyDocument):Promise<boolean>;
    searchVocabulary(word:string):Promise<any>;
    existsByEventId(eventId:string):Promise<boolean>;
}