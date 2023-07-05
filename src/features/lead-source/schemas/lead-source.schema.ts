import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Status } from 'src/status.enums';

export type LeadSourceSchema = LeadSource & Document;

@ObjectType()
@Schema({ timestamps: true })
export class LeadSource {
  @Prop()
  @Field(() => String, {nullable: true})
  name: string;

  @Prop({ type: String, enum: Status, default: Status.ACTIVE })
  @Field(() => Status, {nullable: true})
  status: string;

  @Prop()
  @Field(() => String, {nullable: true})
  dealer_id: string;
}

export const LeadSourceSchema = SchemaFactory.createForClass(LeadSource);
