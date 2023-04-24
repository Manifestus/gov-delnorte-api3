import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  isArray,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  public role: string;

  @IsString({ each: true })
  public documents!: string[];

  @IsBoolean()
  public isDeleted: boolean;

  @IsString()
  public password: string;

  @IsString()
  @IsOptional()
  public user_cnr_id: string;

  @IsArray()
  @IsOptional()
  public properties!: string[];

  @IsArray()
  @IsOptional()
  public histories!: string[];

  @IsString()
  @IsOptional()
  public user_cnr_ids!: string;
}
