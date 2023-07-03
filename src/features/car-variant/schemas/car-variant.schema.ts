import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CarModel } from '../../car-model/schemas/car-model.schema';
import { Status } from 'src/status.enums';

export type CarVariantSchema = CarVariant & Document;

@ObjectType()
@Schema({ timestamps: true })
export class CarVariant {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop({ type: String, enum: Status, default: Status.INACTIVE })
  status: Status;

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CarModel' })
  model_id: CarModel[];

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const CarVariantSchema = SchemaFactory.createForClass(CarVariant);
