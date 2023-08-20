import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.enity';
import { CreateInvoiceDto } from './invoice.dto';

@Controller('invoice')
export class InvoiceController {
  @Inject(InvoiceService)
  private readonly service: InvoiceService;

  @Get('/:id')
  public async getUser(@Param('id') id: any): Promise<Invoice> {
    console.log('id', id);
    return this.service.getInvoice(id);
  }

  @Get()
  public async getUsers(): Promise<Invoice[]> {
    return this.service.getInvoices();
  }

  @Post()
  public async createUser(@Body() body: CreateInvoiceDto): Promise<Invoice> {
    return this.service.createInvoice(body);
  }

  // @Patch('/:id')
  // public async updateProperty(
  //   @Param('id') id: string,
  //   @Body() body: CreateInvoiceDto,
  // ): Promise<Invoice> {
  //   return this.service.updateInvoice(id, body);
  // }
}
