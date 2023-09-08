import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Property } from '../property/property.entity';

export class CreatePrerecordDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public voucher: string;

  @IsString()
  @IsNotEmpty()
  public date: string;

  @IsString()
  @IsNotEmpty()
  public cost: string;

  @IsString()
  @IsNotEmpty()
  public property!: Property;

  @IsBoolean()
  @IsOptional()
  public isDeleted: boolean;
}
