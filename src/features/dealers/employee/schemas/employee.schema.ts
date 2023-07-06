import { SchemaFactory, Prop } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { EntityStatus } from "src/common/enums/entity-status.enums";
import { Document, Types, Schema } from "mongoose";
import { Dealer } from "../../Schemas/dealer.schema";
import encryptPasswordHook from "../mongoose-hooks/encrypt-password.hook";
import { DefaultSchema } from "src/common/decorators/mongoose/default-schema.decorator";
import { PropRequired } from "src/common/decorators/mongoose/prop-required.decorator";

export type EmployeeSchema = DealerHasEmployee & Document;

@ObjectType()
@DefaultSchema({ collection: "dealer_has_employees" })
export class DealerHasEmployee {

  @Field(() => String)
  _id: Types.ObjectId;

  @Field()
  @PropRequired()
  first_name: string;

  @Field()
  @PropRequired()
  last_name: string;

  @Field()
  @Prop({ enum: EntityStatus, default: EntityStatus.ACTIVE }) // active,inactive
  status: EntityStatus;

  @Field()
  @PropRequired()
  phone: number;

  @Field()
  @PropRequired()
  email: string;

  @Field()
  @PropRequired({ ref: Dealer.name, type: Schema.Types.ObjectId })
  dealer: Dealer;

  @PropRequired()
  password: string;

  @Prop({ type: Date, default: null })
  deleted_at: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(DealerHasEmployee);

EmployeeSchema.pre("save", encryptPasswordHook.call());