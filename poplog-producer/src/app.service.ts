import { Inject, Injectable } from '@nestjs/common';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { ProduceLogDTO } from './dtos/producelog.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('KAFKA_PRODUCER')
    private kafkaProducer: Producer,
  ) {}

  async publishLog(log: ProduceLogDTO) {
    await this.kafkaProducer.send({
      topic: 'logs',
      messages: [
        {
          key: log.applicationId,
          value: JSON.stringify(log),
        },
      ],
    });

    return {
      message: 'Log was published successfully!',
    };
  }
}
