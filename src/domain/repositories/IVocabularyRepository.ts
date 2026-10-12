import { VocabularyDocument } from "../entities/vocabularyDocument.js";

export interface IVocabularyRepository{
    save(vocabulary:VocabularyDocument):Promise<boolean>;
    searchVocabulary(word:string):Promise<VocabularyDocument>;
    existsByEventId(eventId:string):Promise<boolean>;
}