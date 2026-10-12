import { SchemaFactory } from "@nestjs/mongoose";
import { VocabularyDocument } from "../../domain/entities/vocabularyDocument.js";

export const vocabularySchema = SchemaFactory.createForClass(VocabularyDocument)
vocabularySchema.index({ eventId:1 },{unique:true}); 