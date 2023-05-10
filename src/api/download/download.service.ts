import {
  GetObjectAclCommand,
  ListObjectsV2Command,
  S3Client,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DownloadService {
  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow('AWS_S3_REGION'),
  });
  constructor(private readonly configService: ConfigService) {}

  async download(fileName: string) {
    const command = new GetObjectAclCommand({
      Bucket: 'gov-sv-perulapia',
      Key: fileName,
    });
    const output = await this.s3Client.send(command);

    return output;
  }

  async downloadFile(fileName: string) {
    const command = new ListObjectsV2Command({
      Bucket: 'gov-sv-perulapia',
      Prefix: fileName,
    });
    const output = await this.s3Client.send(command);

    return output;
  }
}