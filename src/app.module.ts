import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ConfigModule } from '@nestjs/config';
import { VocabularyModule } from './vocabulary.module.js';
import { MongooseModule } from '@nestjs/mongoose';
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [AppController,VocabularyController],
  providers: [AppService],
})
export class AppModule { }
