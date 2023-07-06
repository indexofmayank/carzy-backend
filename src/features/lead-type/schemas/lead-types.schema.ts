import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { ObjectType, Field } from "@nestjs/graphql";
import { Document } from "mongoose";
import { EntityStatus } from "src/common/enums/entity-status.enums";

export type LeadTypeSchema = LeadTypes & Document;

@ObjectType()
@Schema({ timestamps: true })
export class LeadTypes {
  @Prop()
  @Field(() => String)
  name: string;

  @Prop({ type: String, enum: EntityStatus, default: EntityStatus.ACTIVE })
  @Field(() => EntityStatus, { nullable: true })
  status: string;

  @Prop()
  @Field(() => String, { nullable: true })
  dealer: string;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const LeadTypeSchema = SchemaFactory.createForClass(LeadTypes);
