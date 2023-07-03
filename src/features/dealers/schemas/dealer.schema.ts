import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type DealerSchema = Dealer & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Dealer {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  address: string;

  @Field()
  @Prop()
  status: string;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  phone: string;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const DealerSchema = SchemaFactory.createForClass(Dealer);
