import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { DealerStatus } from "../dealer-status.enum";
import { DefaultSchema } from "src/common/decorators/mongoose/default-schema.decorator";

export type DealerSchema = Dealer & Document;

@ObjectType()
@DefaultSchema()
export class Dealer {
  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  address: string;

  @Field()
  @Prop({ type: String, enum: DealerStatus, default: DealerStatus.ENQUIRED })
  status: string;

  @Field()
  @Prop({ required: true })
  email: string;

  @Field()
  @Prop({ required: true })
  phone: string;

  @Prop({ type: Date, default: null })
  deleted_at: Date;
}

export const DealerSchema = SchemaFactory.createForClass(Dealer);
