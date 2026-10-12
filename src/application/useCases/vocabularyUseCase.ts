import { Inject, Injectable } from '@nestjs/common';
import type { IVocabularyRepository } from '../../domain/repositories/IVocabularyRepository.js';
import { VocabularyDocument } from '../../domain/entities/vocabularies.js';
import { GeminiProvider } from '../../infrastructure/ai/geminiProvider.js';
import { newVocabulary } from '../prompts/newVocabulary.js';
import { VocabularyMapper } from '../facade/vocabularyMapper.js';

@Injectable()
export class VocabularyUseCase {
  constructor(
    @Inject('IVocabularyRepository')
    private readonly vocabularyRepository: IVocabularyRepository,
    private readonly aiProvider: GeminiProvider,
  ) {}

  async execute(payload: any): Promise<any> {
    const alreadyProcessed = await this.vocabularyRepository.existsByEventId(
      payload.eventId,
    );
    if (alreadyProcessed) return null;

    const aiResult = newVocabulary(payload.term);
    const response = await this.aiProvider.createVocabulary(aiResult);
    let vocabularyMapper = VocabularyMapper.toDomain(payload, response);
    return this.vocabularyRepository.save(vocabularyMapper);
  }

  async find(word: string): Promise<VocabularyDocument> {
    let response = await this.vocabularyRepository.searchVocabulary(word);
    return VocabularyMapper.toDomain(response);
  }
}
