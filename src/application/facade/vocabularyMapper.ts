import { ContextItem } from '../../domain/entities/contextItem.js';
import { VocabularyDocument } from '../../domain/entities/vocabularyDocument.js';

export class VocabularyMapper {
  static toDomain(data: any,aiResult?:any): VocabularyDocument {
    let context:ContextItem = {
        setence: aiResult.setence,
        translation: aiResult.translation,
        explanation:aiResult.explanation
    }
    let vocabulary: Partial<VocabularyDocument> = {
      eventId: data.eventId,
      term: data.term,
      translation: data.translation,
      tag: data.tag,
      contexts: context,
    };
    return vocabulary as VocabularyDocument;
  }
}
