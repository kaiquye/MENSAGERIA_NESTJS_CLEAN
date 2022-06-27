import { INewOrder } from '../types/new-order.type';
import {
  IsString,
  IsInt,
  IsNumber,
  IsPhoneNumber,
  IsEmail,
  isEmpty,
  IsEmpty,
  IsNotEmpty,
  maxLength,
  minLength,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateOrderDto implements INewOrder {
  @IsString()
  city: string;
  @IsEmail()
  email: string;
  @IsString()
  name: string;
  @IsString()
  neighborhood: string;
  @IsString()
  @MaxLength(15)
  @MinLength(8)
  phone: string;
  @IsString()
  street: string;
  @IsString()
  @MaxLength(2)
  @MinLength(2)
  uf: string;
  @IsString()
  zip_code: string;
}
