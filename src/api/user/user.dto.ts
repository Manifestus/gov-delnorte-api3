import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
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
}
