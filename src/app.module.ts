import { Module } from '@nestjs/common';
import { VocabularyModule } from './vocabulary.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }), 
    VocabularyModule],
})
export class AppModule { }
