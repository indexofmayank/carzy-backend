import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Status } from 'src/status.enums';
import { Document, Types } from 'mongoose';
import { Dealer } from '../../Schemas/dealer.schema';
import { Type } from 'class-transformer';

export type EmployeeSchema = DealerHasEmployee & Document;

@ObjectType()
@Schema({ timestamps: true })
export class DealerHasEmployee {

  @Field(() => String)
  _id: Types.ObjectId;

  @Field()
  @Prop()
  first_name: string;

  @Field()
  @Prop()
  last_name: string;

  @Field()
  @Prop()
  status: Status;

  @Field()
  @Prop()
  phone: number;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop({ ref: Dealer.name, type: Types.ObjectId })
  dealer_id: Dealer;

  @Field()
  @Prop()
  password: string;

  @Field()
  @Prop({ type: Date, default: null })
  deleted_at: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(DealerHasEmployee);
