import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { ObjectType, Field } from "@nestjs/graphql";
import { Document } from "mongoose";
import { EntityStatus } from "src/common/enums/entity-status.enums";

export type LeadSourceSchema = LeadSource & Document;

@ObjectType()
@Schema({ timestamps: true })
export class LeadSource {
  @Prop()
  @Field(() => String, { nullable: true })
  name: string;

  @Prop({ type: String, enum: EntityStatus, default: EntityStatus.ACTIVE })
  @Field(() => EntityStatus, { nullable: true })
  status: string;

  @Prop()
  @Field(() => String, { nullable: true })
  dealer: string;
}

export const LeadSourceSchema = SchemaFactory.createForClass(LeadSource);
