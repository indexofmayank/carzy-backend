import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { EntityStatus } from 'src/common/enums/entity-status.enums';

export type BrandSchema = Brand & Document;

@ObjectType()
@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Brand {
  @Field(() => String, { nullable: true })
  @Prop()
  name: string;

  @Field(() => EntityStatus, { nullable: true })
  @Prop({ type: String, enum: EntityStatus, default: EntityStatus.ACTIVE })
  status: EntityStatus;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
