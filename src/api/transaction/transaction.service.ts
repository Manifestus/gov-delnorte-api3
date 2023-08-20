import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { terminal_information } from './terminal.transation';
import { CreateTransactionDto } from './transaction.dto';

@Injectable()
export class TransactionService {
  @InjectRepository(Transaction)
  private readonly repository: Repository<Transaction>;

  public async getTransactions(): Promise<Transaction[]> {
    return this.repository.find();
  }

  public async getTransaction(
    terminal_information: terminal_information,
  ): Promise<Transaction> {
    return this.repository.findOne({
      where: { terminal_information: terminal_information },
    });
  }

  public async createTransaction(
    body: CreateTransactionDto,
  ): Promise<Transaction> {
    const transaction: Transaction = new Transaction();

    transaction.card_information = body.card_information;
    transaction.operation_information = body.operation_information;
    transaction.terminal_information = body.terminal_information;
    transaction.user_cnr_id = body.user_cnr_id;
    transaction.property_id_number_national_registry =
      body.property_id_number_national_registry;

    return this.repository.save(transaction);
  }

  // public async postTransactionToBank(): Promise<string> {

  // }
}
