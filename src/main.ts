import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import {ConfigService} from '@nestjs/config'
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const rabbitMqUrl = configService.get('RABBITMQ_URL','');
  const queeName = configService.get('RABBITMQ_QUEE','');
const queeNameDLQ = configService.get('RABBITMQ_QUEEDLQ','');


app.connectMicroservice<MicroserviceOptions>({
  transport:Transport.RMQ,
  options:{
    urls:[rabbitMqUrl],
    quee:[queeName],
    noAck:false
  }
});


app.connectMicroservice<MicroserviceOptions>({
  transport:Transport.RMQ,
  options:{
    urls:[rabbitMqUrl],
    quee:[queeNameDLQ],
    noAck:false
  }
});

  await app.startAllMicroservices();
  console.log('VocabularyService pronto e escutando as filas');

}
await bootstrap();
