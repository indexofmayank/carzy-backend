import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, mongo } from 'mongoose';
import { Brand } from '../../brand/schemas/brand.schema';
import { CarVariant } from '../../car-variant/schemas/car-variant.schema';
import { Color } from '../../color/schemas/color.schema';
import { BodyType } from '../../body-type/schemas/body-types.schema';
import { MakeYear } from '../../make-year/schemas/make-year.schema';
import { FuelType } from '../../fuel-type/schemas/fuel-type.schema';
import { Garage } from '../../garage/schemas/garage.schema';
import { SellerDetail } from '../../seller-detail/schemas/seller-detial.schema';
import { Status } from 'src/status.enums';

export type CarSchema = Car & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Car {
  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
  brand_id: Brand[];

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CarVariant' })
  variant_id: CarVariant[];

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Color' })
  color_id: Color[];

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BodyType' })
  body_type_id: BodyType[];

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MakeYear' })
  make_year_id: MakeYear[];

  //Make-month is not created yet

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FuelType' })
  fuel_type_id: FuelType[];

  @Field()
  @Prop()
  transmission: string;

  @Field()
  @Prop()
  no_of_owners: number;

  @Field()
  @Prop()
  price: number;

  @Field()
  @Prop()
  kilometers: number;

  @Field()
  @Prop()
  capacity: number;

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Garage' })
  garage_id: Garage[];

  @Field()
  @Prop()
  car_number: number;

  @Field()
  @Prop()
  chassis_no: number;

  @Field()
  @Prop()
  engine_no: number;

  @Field()
  @Prop()
  tax_valid_at: string;

  @Field()
  @Prop()
  puc_valid_at: string;

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SellerDetail' })
  seller_id: SellerDetail[];

  @Field()
  @Prop()
  insurance_type: string;

  @Field()
  @Prop()
  idv: string;

  @Field()
  @Prop()
  ncb: string;

  @Field()
  @Prop()
  traffic_case: string;

  @Field()
  @Prop()
  solved_by: string;

  @Field()
  @Prop()
  amount: number;

  @Field()
  @Prop()
  description: string;

  @Field()
  @Prop()
  main_image_name: string;

  @Field()
  @Prop()
  main_image_custom_name: string;

  @Field(() => [])
  @Prop()
  car_images: [string];

  @Field()
  @Prop({ type: String, enum: Status, default: Status.INACTIVE })
  status: string;

  @Prop()
  @Field(() => Date, { description: 'Create At' })
  createdAt: Date;

  @Field()
  @Prop()
  deleted_at: Date;
}

export const CarSchema = SchemaFactory.createForClass(Car);
