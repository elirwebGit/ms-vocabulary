import { SchemaFactory } from "@nestjs/mongoose";
import { VocabularyDocument } from "../../domain/entities/vocabularies.js";

export const vocabularySchema = SchemaFactory.createForClass(VocabularyDocument)
vocabularySchema.index({ eventId:1 },{unique:true}); 