import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvoiceDto } from './invoice.dto';
import { Invoice } from './invoice.enity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  @InjectRepository(Invoice)
  private readonly repository: Repository<Invoice>;

  public async getInvoices(): Promise<Invoice[]> {
    return this.repository.find();
  }

  public async getInvoice(id: 'uuid'): Promise<Invoice> {
    return this.repository.findOne({ where: { id: id, isDeleted: false } });
  }

  public async createInvoice(body: CreateInvoiceDto): Promise<Invoice> {
    const invoice: Invoice = new Invoice();

    invoice.currency = body.currency;
    invoice.number = body.number;
    invoice.issueDate = body.issueDate;
    invoice.status = body.status;
    invoice.user = body.user;
    body.dueDate ? (invoice.dueDate = body.dueDate) : null;
    body.items ? (invoice.items = body.items) : null;
    body.subtotalAmount ? (invoice.subtotalAmount = body.subtotalAmount) : null;
    body.taxAmount ? (invoice.taxAmount = body.taxAmount) : null;
    body.totalAmount ? (invoice.totalAmount = body.totalAmount) : null;

    return this.repository.save(invoice);
  }

  public async updateInvoice(
    id: any,
    body: CreateInvoiceDto,
  ): Promise<Invoice> {
    const invoice = await this.repository
      .findOne({ where: { id: id } })
      .then((invoice) => invoice);

    body.currency ? (invoice.currency = body.currency) : null;
    body.number ? (invoice.number = body.number) : null;
    body.issueDate ? (invoice.issueDate = body.issueDate) : null;

    body.dueDate ? (invoice.dueDate = body.dueDate) : null;
    body.items ? (invoice.items = body.items) : null;
    body.subtotalAmount ? (invoice.subtotalAmount = body.subtotalAmount) : null;
    body.taxAmount ? (invoice.taxAmount = body.taxAmount) : null;
    body.totalAmount ? (invoice.totalAmount = body.totalAmount) : null;
    body.isDeleted ? (invoice.isDeleted = body.isDeleted) : null;
    invoice.updatedAt = new Date();

    return this.repository.save(invoice);
  }
}
