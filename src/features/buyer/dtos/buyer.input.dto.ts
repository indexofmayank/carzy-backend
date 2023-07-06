import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
class AddressInputDto {
  @IsNotEmpty()
  @Field()
  address1: string;

  @IsNotEmpty()
  @Field()
  address2: string;

  @IsNotEmpty()
  @Field()
  city_id: string;

  @IsNotEmpty()
  @Field()
  state_id: string;

  @IsNotEmpty()
  @Field()
  pin: number;
}

interface IAddress {
  address1: string;
  address2: string;
  city_id: string;
  state_id: string;
  pin: number;
}

@InputType()
class SpouseDetailInputDto {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  contact: number;

  @IsNotEmpty()
  @Field()
  dob: string;

  @IsNotEmpty()
  @Field()
  special_instruction: string;

  @IsNotEmpty()
  @Field()
  picture: string;
}

interface ISpouseDetail {
  name: string;
  contact: number;
  dob: string;
  special_instruction: string;
  picture: string;
}

@InputType()
export class BuyerInputDto {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  contact_no: number;

  @IsNotEmpty()
  @Field(() => AddressInputDto)
  address: IAddress;

  @IsNotEmpty()
  @Field()
  referral: string;

  @IsNotEmpty()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  status: string;

  @IsNotEmpty()
  @Field()
  dealer: string;

  @IsNotEmpty()
  @Field()
  dob: string;

  @IsNotEmpty()
  @Field()
  doa: string;

  @IsNotEmpty()
  @Field(() => SpouseDetailInputDto)
  spouse_details: ISpouseDetail;
}
