import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { History } from './history.entity';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './history.dto';

@Controller('history')
export class HistoryController {
  @Inject(HistoryService)
  private readonly service: HistoryService;

  @Get(':id')
  public getHistory(@Param('id', ParseIntPipe) id: string): Promise<History> {
    return this.service.getProperty(id);
  }

  @Get()
  public getHistorys(): Promise<History[]> {
    return this.service.getPropertys();
  }

  @Post()
  public createUser(@Body() body: CreateHistoryDto): Promise<History> {
    return this.service.createUser(body);
  }

  @Patch(':id')
  public updateProperty(
    @Param('id', ParseIntPipe) id: string,
    @Body() body: CreateHistoryDto,
  ): Promise<History> {
    return this.service.updateProperty(id, body);
  }
}
