import { Controller, Get, Req } from "@nestjs/common";

@Controller('vocabulary')
export class VocabularyController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}