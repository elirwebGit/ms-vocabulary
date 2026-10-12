import { Controller } from '@nestjs/common'; 
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices'; 

@Controller() 
export class VocabularyController { 
  constructor() {} 

  @EventPattern('nome fila') 
  async handleCreateVocabulary(@Payload() data: any, 
  @Ctx() context: any) { 
    const rmqContext = context as RmqContext; 
    const channel = context.getChannelRef(); 
    const originalMsg = rmqContext.getMessage(); 

    try { 
      channel.ack(originalMsg); 
    } catch (error) { 
      channel.nack(originalMsg, false, false); 
    } 
  } 
}
