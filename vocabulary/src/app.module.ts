import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { VocabularyModule } from '../../src/vocabulary.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [VocabularyModule],

})
export class AppModule { }
