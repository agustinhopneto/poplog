import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class AppService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async saveLog(log: any) {
    try {
      await this.elasticsearchService.create({
        id: 'logs',
        index: 'logs',
        document: log,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
