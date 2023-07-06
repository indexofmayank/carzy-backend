import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { ObjectType, Field, ID } from "@nestjs/graphql";
import { CarModel } from "../../car-model/schemas/car-model.schema";
import { EntityStatus } from "src/common/enums/entity-status.enums";

export type CarVariantSchema = CarVariant & Document;

@ObjectType()
@Schema({ timestamps: true })
export class CarVariant {
  @Field(() => String, { nullable: true })
  @Prop()
  name: string;

  @Field(() => EntityStatus, { nullable: true })
  @Prop({ type: String, enum: EntityStatus, default: EntityStatus.ACTIVE })
  status: EntityStatus;

  @Field(() => String, { nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CarModel" })
  model_id: CarModel[];

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const CarVariantSchema = SchemaFactory.createForClass(CarVariant);
