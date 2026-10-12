import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Transport } from "@nestjs/microservices";
import { HealthCheck, HealthCheckService, MicroserviceHealthIndicator } from "@nestjs/terminus";

@Controller()
export class HealthController{
    constructor(private helth:HealthCheckService,
        private microservice: MicroserviceHealthIndicator,
        private configService:ConfigService){}
    
    @Get()
    @HealthCheck()
    check(){
        const rabbitMqUrl = this.configService.get<string>('RABBITMQ_URL');
        return this.helth.check([
            ()=> this.microservice.pingCheck(
            'rabbitmq', {
               transport: Transport.RMQ,
               options:{
                urls:[rabbitMqUrl]
               }
            })
        ])
    }
}