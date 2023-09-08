import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PrerecordService } from '../prerecord/prerecord.service';
import { Prerecord } from '../prerecord/prerecord.entity';
import { CreatePrerecordDto } from '../prerecord/prerecord.dto';

@Controller('property')
export class PrerecordController {
  @Inject(PrerecordService)
  private readonly service: PrerecordService;

  @Get(':id')
  public async getPrerecord(@Param('id') id: string): Promise<Prerecord> {
    return this.service.getPrerecord(id);
  }

  @Get()
  public async getPrerecords(): Promise<Prerecord[]> {
    return this.service.getPrerecords();
  }

  @Post()
  public async createPrerecord(
    @Body() body: CreatePrerecordDto,
  ): Promise<Prerecord> {
    return this.service.createPrerecord(body);
  }

  @Patch(':id')
  public async updatePrerecord(
    @Param('id') id: string,
    @Body() body: CreatePrerecordDto,
  ): Promise<Prerecord> {
    return this.service.updatePrerecord(id, body);
  }
}
