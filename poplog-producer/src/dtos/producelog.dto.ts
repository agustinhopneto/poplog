export class ProduceLogDTO {
  applicationId: string;
  type: 'info' | 'error';
  content: Record<string, unknown>;
}
