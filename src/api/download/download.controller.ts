import { Controller, Get, Param } from '@nestjs/common';
import { DownloadService } from './download.service';

@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Get('/:id')
  get(@Param('id') id: string) {
    return this.downloadService.download('property/' + id + '/tsconfig.json');
  }

  @Get('files/:id')
  getFiles(@Param('id') id: string) {
    return this.downloadService.downloadFile('property/' + id);
  }
}
