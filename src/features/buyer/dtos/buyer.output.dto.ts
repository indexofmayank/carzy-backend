import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
class AddressOutputDto {
  @Field()
  address1: string;

  @Field()
  address2: string;

  @Field()
  city_id: string;

  @Field()
  state_id: string;

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

@ObjectType()
class SpouseDetailOutputDto {
  @Field()
  name: string;

  @Field()
  contact: number;

  @Field()
  dob: string;

  @Field()
  special_instruction: string;

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

@ObjectType()
export class BuyerOutputDto {
  @Field()
  name: string;

  @Field()
  contact_no: number;

  @Field(() => AddressOutputDto)
  address: IAddress;

  @Field()
  referral: string;

  @Field()
  email: string;

  @Field()
  status: string;

  @Field()
  dealer: string;

  @Field()
  dob: string;

  @Field()
  doa: string;

  @Field(() => SpouseDetailOutputDto)
  spouse_details: ISpouseDetail;
}
