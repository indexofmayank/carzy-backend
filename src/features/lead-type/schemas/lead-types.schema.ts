import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Status } from 'src/status.enums';

export type LeadTypeSchema = LeadTypes & Document;

@ObjectType()
@Schema({ timestamps: true })
export class LeadTypes {
  @Prop()
  @Field()
  name: string;

  @Prop({ type: String, enum: Status, default: Status.INACTIVE })
  @Field()
  status: string;

  @Prop()
  @Field()
  dealer_id: string;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_id: Date;
}

export const LeadTypeSchema = SchemaFactory.createForClass(LeadTypes);
