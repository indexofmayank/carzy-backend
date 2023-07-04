import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Status } from 'src/status.enums';

export type LeadTypeSchema = LeadTypes & Document;

@ObjectType()
@Schema({ timestamps: true })
export class LeadTypes {
  @Prop()
  @Field(() => String)
  name: string;

  @Prop({ type: String, enum: Status, default: Status.ACTIVE })
  @Field(() => Status, {nullable: true})
  status: string;

  @Prop()
  @Field(() => String, {nullable: true})
  dealer_id: string;

  @Field(() => Date, {nullable: true})
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const LeadTypeSchema = SchemaFactory.createForClass(LeadTypes);
