import { IsJSON, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { card_information } from './card.transaction';
import { terminal_information } from './terminal.transation';
import { operation_information } from './operation.transaction';
import { User } from '../user/user.entity';
import { Property } from '../property/property.entity';

export class CreateTransactionDto {
  //main
  public card_information: card_information;

  public terminal_information: terminal_information;

  public operation_information: operation_information;

  public user_cnr_id: User;

  public property_id_number_national_registry: Property;
}
