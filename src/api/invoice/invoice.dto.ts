import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from '../user/user.entity';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  public currency: string;

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

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(6)
  @IsOptional()
  public items!: string[];

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
}
