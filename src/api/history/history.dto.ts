import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';
import { Property } from '../property/property.entity';
import { User } from '../user/user.entity';

export class CreateHistoryDto {
  @IsString()
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  @IsDate()
  public owner_date_of_purchase!: Date;

  @IsNotEmpty()
  @IsString()
  public status!: string;

  @IsNotEmpty()
  @IsObject()
  public property!: Property;

  @IsNotEmpty()
  @IsArray()
  public user!: User;
}
