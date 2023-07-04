import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type TeleCallingEntrySchema = TeleCallingEntry & Document;

@ObjectType()
@Schema({ timestamps: true })
export class TeleCallingEntry {
  @Prop()
  @Field(() => String, {nullable: true})
  buyer_id: string;

  @Prop()
  @Field(() => Date, {nullable: true})
  visited_next_date: string;

  @Prop()
  @Field(() => Date, {nullable: true})
  next_visit_date: string;

  @Prop()
  @Field(() => Boolean, {nullable: true})
  finance_required: boolean;

  @Prop()
  @Field(() => String)
  remarks: string;

  @Prop()
  @Field(() => Date)
  next_call_date: Date;

  @Prop()
  @Field(() => String)
  created_by: string;

  @Prop()
  @Field(() => String)
  specail_instruction: string;

  @Prop({ type: Date, default: 0 })
  @Field()
  deleted_at: Date;
}

export const TeleCallingEntrySchema =
  SchemaFactory.createForClass(TeleCallingEntry);
