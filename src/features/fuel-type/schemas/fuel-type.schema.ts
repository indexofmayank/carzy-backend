import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { EntityStatus } from "src/common/enums/entity-status.enums";

export type FuelTypeSchema = FuelType & Document;

@ObjectType()
@Schema({ timestamps: true })
export class FuelType {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => EntityStatus, { nullable: true })
  @Prop({ type: String, enum: EntityStatus, default: EntityStatus.ACTIVE })
  status: EntityStatus;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const FuelTypeSchema = SchemaFactory.createForClass(FuelType);
