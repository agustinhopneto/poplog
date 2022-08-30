import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class AppService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async getLogs() {
    try {
      const result = await this.elasticsearchService.search({
        index: 'logs',
      });

      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
