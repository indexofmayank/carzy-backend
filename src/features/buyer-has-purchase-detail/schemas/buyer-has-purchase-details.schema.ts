import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ObjectType, Field } from "@nestjs/graphql";
import { EntityStatus } from "src/common/enums/entity-status.enums";

export type BuyerHasPurchaseDetailSchema = BuyerHasPurchaseDetail & Document;

@ObjectType()
@Schema({ timestamps: true })
export class BuyerHasPurchaseDetail {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  contact_no: number;

  @Field()
  @Prop()
  requirement: string;

  @Field()
  @Prop()
  car_number: string;

  @Field()
  @Prop()
  call_type_id: string;

  @Field()
  @Prop()
  lead_source_id: string;

  @Field()
  @Prop()
  lead_type_id: string;

  @Field()
  @Prop()
  referral: string;

  @Field()
  @Prop({ type: String, enum: EntityStatus, default: EntityStatus.ACTIVE })
  status: string;
}

export const BuyerHasPurchaseDetailSchema = SchemaFactory.createForClass(
  BuyerHasPurchaseDetail,
);
