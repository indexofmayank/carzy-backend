import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Status } from 'src/status.enums';

export type BodyTypeSchema = BodyType & Document;

@ObjectType()
@Schema()
export class BodyType {
  @Field(() => String, {nullable: true})
  @Prop()
  name: string;

  @Field(() => Status, {nullable: true})
  @Prop({ type: String, enum: Status, default: Status.ACTIVE })
  status: Status;

  @Field(() => Date, {nullable: true})
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;

}

export const BodyTypeSchema = SchemaFactory.createForClass(BodyType);
