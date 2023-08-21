import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from '../user/user.entity';
import { Transaction } from '../transaction/transaction.entity';
import { Property } from '../property/property.entity';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  public number: string;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsNumber()
  @IsNotEmpty()
  public issueDate: number;

  @IsNumber()
  @IsOptional()
  public dueDate: number;

  @IsNumber()
  @IsOptional()
  public subtotalAmount: number;

  @IsNumber()
  @IsOptional()
  public taxAmount: number;

  @IsNumber()
  @IsOptional()
  public totalAmount: number;

  @IsBoolean()
  public isDeleted: boolean;

  @IsString()
  @IsNotEmpty()
  public user: User;

  @IsString()
  @IsNotEmpty()
  public transaction: Transaction;

  @IsString()
  @IsNotEmpty()
  public property: Property;
}
