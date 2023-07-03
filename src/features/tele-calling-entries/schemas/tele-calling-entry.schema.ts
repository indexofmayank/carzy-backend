import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type TeleCallingEntrySchema = TeleCallingEntry & Document;

@ObjectType()
@Schema({ timestamps: true })
export class TeleCallingEntry {
  @Prop()
  @Field()
  buyer_id: string;

  @Prop()
  @Field()
  visited_next_date: string;

  @Prop()
  @Field()
  next_visit_date: string;

  @Prop()
  @Field()
  finance_required: boolean;

  @Prop()
  @Field()
  remarks: string;

  @Prop()
  @Field()
  next_call_date: string;

  @Prop()
  @Field()
  created_by: string;

  @Prop()
  @Field()
  specail_instruction: string;

  @Prop({ type: Date, default: 0 })
  @Field()
  deleted_at: Date;
}

export const TeleCallingEntrySchema =
  SchemaFactory.createForClass(TeleCallingEntry);
