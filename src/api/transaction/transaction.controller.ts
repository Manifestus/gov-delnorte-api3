import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTransactionDto } from './transaction.dto';
import { TransactionService } from './transaction.service';
import axios from 'axios';
import FormData = require('form-data');
import { card_information } from './card.transaction';
import { operation_information } from './operation.transaction';
import { terminal_information } from './terminal.transation';
import { User } from '../user/user.entity';
import { Property } from '../property/property.entity';

@Controller('transaction')
export class TransactionController {
  @Inject(TransactionService)
  private readonly service: TransactionService;

  @Post()
  public async createTransaction(@Body() body) {
    const data = new FormData();
    data.append('grant_type', 'password');
    data.append('username', 'PERULAPIA2');
    data.append('password', 'TNl1SzMcrD');

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://pay.davivienda.com.sv:8766/easypay-jwt-service/oauth/token',
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic UEVSVUxBUElBMTpaQkBla05VazQw',
        ...data.getHeaders(),
      },
      data: data,
    };

    const token = await axios
      .request(config)
      .then((response) => {
        return response.data.access_token;
      })
      .catch((error) => {
        console.log(error);
      });

    const payment = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://pay.davivienda.com.sv:8766/easypay-transactor-service/purchase-tran-card/1381',
      headers: {
        Authorization: 'Bearer ' + token,
        'x-b3-Traceid': '1234567890',
        'x-version': '1',
        'x-application': '1',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: body,
    };

    const transaction = await axios
      .request(payment)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    const transactionJSON = JSON.stringify(transaction);
    const transactionObject = JSON.parse(transactionJSON);

    let cardInformation: card_information;
    let terminalInformation: terminal_information;
    let operationInformation: operation_information;
    const userCnrId: User = body.user_cnr_id;
    const propertyIdNumberNationalRegistry: Property =
      body.property_id_number_national_registry;

    if (transactionObject.data.card_information) {
      cardInformation = transactionObject.data.card_information;
    }

    if (transactionObject.data.operation_information) {
      operationInformation = transactionObject.data.operation_information;
    }

    if (transactionObject.data.terminal_information) {
      terminalInformation = transactionObject.data.operation_information;
    }

    const transactionDto: CreateTransactionDto = {
      card_information: cardInformation,
      terminal_information: terminalInformation,
      operation_information: operationInformation,
      user_cnr_id: userCnrId,
      property_id_number_national_registry: propertyIdNumberNationalRegistry,
    };

    return await this.service.createTransaction(transactionDto);
  }
}
