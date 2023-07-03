import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { BodyType } from '../../body-type/schemas/body-types.schema';
import { Brand } from '../../brand/schemas/brand.schema';
import { Status } from 'src/status.enums';

export type CarModelSchema = CarModel & Document;

@ObjectType()
@Schema({ timestamps: true })
export class CarModel {
  @Field()
  @Prop()
  name: string;

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BodyType' })
  body_type_id: BodyType[];

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
  brand_id: Brand[];

  @Field()
  @Prop({ type: String, enum: Status, default: Status.INACTIVE })
  status: Status;

  @Field()
  @Prop()
  created_by: string;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const CarModelSchema = SchemaFactory.createForClass(CarModel);
