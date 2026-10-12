import { InjectModel } from "@nestjs/mongoose";
import { VocabularyDocument } from "../../domain/entities/vocabularies.js";
import { IVocabularyRepository } from "../../domain/repositories/IVocabularyRepository.js";
import { Injectable } from "@nestjs/common";
import { model, Model } from "mongoose";

@Injectable()
export class VocabularyRepository implements IVocabularyRepository {
    constructor(@InjectModel(VocabularyDocument.name)
    private readonly model: Model<VocabularyDocument>) { }
    async existsByEventId(eventId: string): Promise<boolean> {
        const count = await this.model.countDocuments({ eventId }).exec();
        return count > 0;
    }
    async save(vocabulary: VocabularyDocument): Promise<any> {
        return await new this.model({ ...vocabulary }).save();

    }
    async searchVocabulary(word: string): Promise<any> {
        const vocabulary = await this.model.find({ term: word }).exec();
        return vocabulary;
    }

}