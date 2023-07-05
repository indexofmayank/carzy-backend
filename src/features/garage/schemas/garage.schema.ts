import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { CarModel } from '../../car-model/schemas/car-model.schema';
import { Status } from 'src/status.enums';

export type GarageSchema = Garage & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Garage {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String, {nullable: true})
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CarModel' })
  model_id: CarModel[];

  @Field(() => Status, {nullable: true})
  @Prop({ type: String, enum: Status, default: Status.ACTIVE })
  status: Status;

  @Field(() => Date, {nullable: true})
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const GarageSchema = SchemaFactory.createForClass(Garage);
