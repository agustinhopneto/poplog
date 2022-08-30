import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProduceLogDTO } from './dtos/producelog.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async produceLog(@Body() log: ProduceLogDTO) {
    return this.appService.publishLog(log);
  }
}
