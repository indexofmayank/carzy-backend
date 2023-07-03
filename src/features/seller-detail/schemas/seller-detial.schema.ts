import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type SellerDetailSchema = SellerDetail & Document;

@ObjectType()
@Schema({ timestamps: true })
export class SellerDetail {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  address: string;

  @Field()
  @Prop()
  zip_code: string;

  @Field()
  @Prop()
  phone: number;

  @Field()
  @Prop()
  alternative_no: number;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  alternate_email: string;

  @Field()
  @Prop()
  dob: string;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const SellerDetailSchema = SchemaFactory.createForClass(SellerDetail);
