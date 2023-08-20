import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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

  @IsString()
  @IsNotEmpty()
  public issueDate: string;

  @IsString()
  @IsOptional()
  public dueDate: string;

  @IsString()
  @IsOptional()
  public subtotalAmount: string;

  @IsString()
  @IsOptional()
  public taxAmount: string;

  @IsString()
  @IsOptional()
  public totalAmount: string;

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
