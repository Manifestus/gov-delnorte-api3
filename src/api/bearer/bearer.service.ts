import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionDto } from '../transaction/transaction.dto';

@Injectable()
export class BearerService {
  constructor(private readonly httpService: HttpService) {}

  public async getToken() {
    const data = {
      grant_type: 'password',
      username: process.env.USERNAMEADMIN,
      password: process.env.PASSWORDADMIN,
    };
    const headers = {
      Authorization: 'Basic ' + process.env.AUTHBASE64,
      'Content-Type': 'multipart/form-data',
    };
    return this.httpService.axiosRef.post(process.env.ADDRESSBEARER, data, {
      headers,
    });
  }

  public async postPayment(body: CreateTransactionDto): Promise<string> {
    const bodyCard = body.card_information;
    const bodyTerminal = body.terminal_information;
    const bodyOperation = body.operation_information;

    const finalBody = { bodyCard, bodyTerminal, bodyOperation };
    const headers = {
      Authorization: 'Basic ' + process.env.AUTHBASE64,
      'x-b3-Traceid': '134557893',
      'x-version': '1',
      'x-application': 'App Davivienda Perulapia',
      'Content-Type': 'application/json',
    };
    return this.httpService.axiosRef.post(
      process.env.ADDRESSPAYMENT,
      finalBody,
      {
        headers,
      },
    );
  }
}
