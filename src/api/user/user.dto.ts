import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Property } from '../property/property.entity';
import { History } from '../history/history.entity';
import { Invoice } from '../invoice/invoice.enity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public user_cnr_id: string;

  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsString()
  @IsNotEmpty()
  public country: string;

  @IsString()
  @IsNotEmpty()
  public municipality: string;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public address2: string;

  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public role: string;

  @IsString({ each: true })
  @IsOptional()
  public documents!: string[];

  @IsString()
  @IsOptional()
  public token: string;

  @IsBoolean()
  @IsOptional()
  public isDeleted: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  public properties!: Property[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  public histories!: History;
}
