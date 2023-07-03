import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Status } from 'src/status.enums';

export type CallTypeSchema = CallType & Document;

@ObjectType()
@Schema({ timestamps: true })
export class CallType {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop({ type: String, enum: Status, default: Status.INACTIVE })
  status: Status;

  @Field()
  @Prop()
  dealer_id: string;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const CallTypeSchema = SchemaFactory.createForClass(CallType);
