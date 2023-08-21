import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto } from './transaction.dto';

@Injectable()
export class TransactionService {
  @InjectRepository(Transaction)
  private readonly repository: Repository<Transaction>;

  public getTransaction(id: any): Promise<Transaction[]> {
    const transaction = this.repository.find({
      relations: ['user_cnr_id', 'property_id_number_national_registry'],
      where: { user_cnr_id: { id: id } },
    });

    const finalTransaction = transaction.then((data) => {
      data.map((item) => {
        item.card_information.card_number =
          item.card_information.card_number.substring(12, 16);

        item.card_information.card_expiry_date = '****';

        item.card_information.card_cvv = '***';
      });
      return data;
    });

    return finalTransaction;
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
