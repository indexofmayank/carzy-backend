import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AddressSchema, IAddress } from '../schemas/buyer.address.schema';
import {
  ISpouseDetail,
  SpouseDetailSchema,
} from './buyer.spouse-detail.schema';
import { ObjectType, Field } from '@nestjs/graphql';

export type BuyerSchema = Buyer & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Buyer {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  contact_no: number;

  @Field(() => AddressSchema)
  @Prop({ type: AddressSchema })
  address: IAddress;

  @Field()
  @Prop()
  referral: string;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  status: string;

  @Field()
  @Prop()
  dealer: string;

  @Field()
  @Prop()
  dob: string;

  @Field()
  @Prop()
  doa: string;

  @Field(() => SpouseDetailSchema)
  @Prop({ type: SpouseDetailSchema })
  spouse_details: ISpouseDetail;
}
export const BuyerSchema = SchemaFactory.createForClass(Buyer);
