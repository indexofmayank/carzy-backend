import { IsNotEmpty } from 'class-validator';
import { IAddress, Address } from '../schemas/buyer.address.schema';
import {
  ISpouseDetail,
  SpouseDetail,
} from '../schemas/buyer.spouse-detail.schema';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateBuyerDto {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  contact_no: number;

  @Field(() => Address)
  @IsNotEmpty()
  address: IAddress;

  @Field()
  @IsNotEmpty()
  referral: string;

  @Field()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNotEmpty()
  status: string;

  @Field()
  @IsNotEmpty()
  dealer: string;

  @Field()
  @IsNotEmpty()
  dob: string;

  @Field()
  @IsNotEmpty()
  doa: string;

  @Field(() => SpouseDetail)
  @IsNotEmpty()
  spouse_details: ISpouseDetail;
}
