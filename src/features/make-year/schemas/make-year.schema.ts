import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from 'src/status.enums';

export type MakeYearSchema = MakeYear & Document;

@ObjectType()
@Schema({ timestamps: true })
export class MakeYear {
  @Field()
  @Prop()
  year: number;

  @Field()
  @Prop({ type: String, enum: Status, default: Status.INACTIVE })
  status: Status;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const MakeYearSchema = SchemaFactory.createForClass(MakeYear);
