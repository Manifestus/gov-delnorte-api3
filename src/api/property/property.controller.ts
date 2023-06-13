import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './property.dto';
import { Property } from './property.entity';

@Controller('property')
export class PropertyController {
  @Inject(PropertyService)
  private readonly service: PropertyService;

  @Get(':id')
  public async getProperty(@Param('id') id: string): Promise<Property> {
    return this.service.getProperty(id);
  }

  @Get()
  public async getPropertys(): Promise<Property[]> {
    return this.service.getPropertys();
  }

  @Post()
  public async createUser(@Body() body: CreatePropertyDto): Promise<Property> {
    return this.service.createUser(body);
  }

  @Patch(':id')
  public async updateProperty(
    @Param('id', ParseIntPipe) id: string,
    @Body() body: CreatePropertyDto,
  ): Promise<Property> {
    return this.service.updateProperty(id, body);
  }

  @Delete(':id')
  public async deleteProperty(
    @Param('id') id: string,
    @Body() body: CreatePropertyDto,
  ): Promise<Property> {
    body.isDeleted = true;
    return this.service.updateProperty(id, body);
  }
}
