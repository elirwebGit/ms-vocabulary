import { GoogleGenAI } from "@google/genai";
import { Injectable } from "@nestjs/common";
@Injectable()
export class GeminiProvider{
    private ai:GoogleGenAI;

    constructor(){
        this.ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY!
        });
    }

    async createVocabulary(prompt: string):Promise<string>{
        const response = await this.ai.models.generateContent({
            model:"gemini-2.5-flash",
            contents:prompt
        })

        return response.text ?? "Nenhuma resposta gerada";
    }
}