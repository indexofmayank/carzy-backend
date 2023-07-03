import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { CarModel } from '../../car-model/schemas/car-model.schema';
import { Status } from 'src/status.enums';

export type GarageSchema = Garage & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Garage {
  @Field()
  @Prop()
  name: string;

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CarModel' })
  model_id: CarModel[];

  @Field()
  @Prop({ type: String, enum: Status, default: Status.INACTIVE })
  status: Status;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const GarageSchema = SchemaFactory.createForClass(Garage);
