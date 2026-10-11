import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { VocabularyController } from './adapter/controller/vocabularyController.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [AppController, VocabularyController],
  providers: [AppService],
})
export class AppModule { }
