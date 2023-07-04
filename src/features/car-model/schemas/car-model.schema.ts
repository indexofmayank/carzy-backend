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

  @Field(() => String, {nullable: true})
  @Prop({type: String})
  name: string;

  @Field(() => String, {nullable: true})
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BodyType' })
  body_type_id: BodyType[];

  @Field(() => String, {nullable: true})
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
  brand_id: Brand[];

  @Field(() => Status, {nullable: true})
  @Prop({ type: String, enum: Status, default: Status.ACTIVE })
  status: Status;

  @Field(() => Date, {nullable: true})
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const CarModelSchema = SchemaFactory.createForClass(CarModel);
