import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from 'src/status.enums';

export type FuelTypeSchema = FuelType & Document;

@ObjectType()
@Schema({ timestamps: true })
export class FuelType {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop({ type: String, enum: Status, default: Status.INACTIVE })
  status: Status;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const FuelTypeSchema = SchemaFactory.createForClass(FuelType);
