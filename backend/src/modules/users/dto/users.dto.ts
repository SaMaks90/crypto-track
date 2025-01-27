import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  MinLength,
} from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  password?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  lastname: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  surname: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  country: string;

  @IsOptional()
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;
}
