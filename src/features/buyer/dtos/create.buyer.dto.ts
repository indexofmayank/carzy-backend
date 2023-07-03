import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IAddress } from '../schemas/buyer.address.schema';
import { ISpouseDetail } from '../schemas/buyer.spouse-detail.schema';
import { IsAlpha } from '@nestjs/class-validator';

export class CreateBuyerDto {
  @IsString({ message: 'Name can only contains alphabet' })
  @MinLength(3, { message: 'Name must contain atleat 3 character' })
  @MaxLength(20, { message: 'Name can only contains 20 character' })
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  name: string;

  @IsInt({ message: 'Please enter valid phone number' })
  @IsNotEmpty({ message: 'Phone field cannot be empty' })
  @IsNotEmpty()
  contact_no: number;

  @IsNotEmpty({ message: 'Address Field cannot be empty' })
  address: IAddress;

  @IsNotEmpty()
  referral: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  dealer_id: string;

  @IsNotEmpty()
  dob: string;

  @IsNotEmpty()
  doa: string;

  @IsNotEmpty()
  spouse_details: ISpouseDetail;
}
