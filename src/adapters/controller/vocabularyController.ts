import { Controller } from '@nestjs/common';
import { VocabularyUseCase } from '../../application/useCases/vocabularyUseCase.js';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class VocabularyController {
  constructor(private readonly vocabularyUseCase: VocabularyUseCase) {}
  @EventPattern('nome da fila')
  async handle(@Payload() data: any, @Ctx() context: any) {
    const rmqContext = context as RmqContext;
    const start = Date.now();
    const channel = rmqContext.getChannelRef();
    const originalMsg = rmqContext.getMessage();
    const traceId = originalMsg.properties.correlationId;
    const spanId = originalMsg.properties.messageId;
    const eventId = data.eventId;

    try {
      const result = await this.vocabularyUseCase.execute(data);

      channel.ack(originalMsg);

      // implementar nos microsserviços log,flash,pronuncionation, describe_image
    } catch (error) {
      channel.nack(originalMsg, false, false);
    }
  }

  @EventPattern('nome da fila morta')
  async handleDLQ(@Payload() data: any, @Ctx() context: any) {
    const rmqContext = context as RmqContext;
    const start = Date.now();
    const channel = rmqContext.getChannelRef();
    const originalMsg = rmqContext.getMessage();
    const traceId = originalMsg.properties.correlationId;
    const spanId = originalMsg.properties.messageId;
    const eventId = data.eventId;

    try {
      const result = await this.vocabularyUseCase.execute(data);

      channel.ack(originalMsg);

      // implementar nos microsserviços log,flash,pronuncionation, describe_image
    } catch (error) {
      channel.nack(originalMsg, false, false);
    }
  }

  @MessagePattern('nome da fila busca')
  async handleSearch(@Payload() data: any, @Ctx() context: any) {
    const rmqContext = context as RmqContext;
    const start = Date.now();
    const channel = rmqContext.getChannelRef();
    const originalMsg = rmqContext.getMessage();
    const traceId = originalMsg.properties.correlationId;
    const spanId = originalMsg.properties.messageId;
    const eventId = data.eventId;

    try {
      const result = await this.vocabularyUseCase.find(data);

      channel.ack(originalMsg);

      // implementar nos microsserviços log,flash,pronuncionation, describe_image
    } catch (error) {
      channel.nack(originalMsg, false, false);
    }
  }
}
