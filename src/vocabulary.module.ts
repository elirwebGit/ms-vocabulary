import { Module } from "@nestjs/common";
import { VocabularyController } from "./adapters/controller/vocabularyController.js";
import { HealthController } from "./adapters/controller/healthController.js";
import { VocabularyDocument } from "./domain/entities/vocabularies.js";
import { vocabularySchema } from "./infrastructure/schema/vocabularySchema.js";
import { MongooseModule } from "@nestjs/mongoose";
import { VocabularyUseCase } from "./application/useCases/vocabularyUseCase.js";
import { VocabularyRepository } from "./infrastructure/repositories/vocabularyRepository.js";
import { GeminiProvider } from "./infrastructure/ai/geminiProvider.js";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: VocabularyDocument.name, schema: vocabularySchema }],
            'sua conexao'
        )
    ],
    controllers: [
        VocabularyController,
        HealthController
    ],
    providers: [
        VocabularyUseCase,
        {
            provide: 'IVocabularyRepository',
            useClass: VocabularyRepository
        },
        GeminiProvider
    ]
})
export class VocabularyModule {

}