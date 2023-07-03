import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Status } from 'src/status.enums';
import { Document } from 'mongoose';

export type EmployeeSchema = DealerHasEmployee & Document;

@ObjectType()
@Schema({ timestamps: true })
export class DealerHasEmployee {
  @Field()
  @Prop()
  first_name: string;

  @Field()
  @Prop()
  last_name: string;

  @Field()
  @Prop()
  status: Status;

  @Field()
  @Prop()
  phone: number;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  dealer_id: string;

  @Field()
  @Prop()
  password: string;

  @Field()
  @Prop({ type: Date, default: 0 })
  deleted_at: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(DealerHasEmployee);
