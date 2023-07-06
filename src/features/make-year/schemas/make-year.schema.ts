import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { EntityStatus } from "src/common/enums/entity-status.enums";

export type MakeYearSchema = MakeYear & Document;

@ObjectType()
@Schema({ timestamps: true })
export class MakeYear {
  @Field(() => Int)
  @Prop()
  year: number;

  @Field(() => EntityStatus, { nullable: true })
  @Prop({ type: String, enum: EntityStatus, default: EntityStatus.ACTIVE })
  status: EntityStatus;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const MakeYearSchema = SchemaFactory.createForClass(MakeYear);
