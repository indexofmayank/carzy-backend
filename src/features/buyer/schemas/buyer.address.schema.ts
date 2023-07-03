import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';

@Schema({ _id: false })
export class Address {
  @IsNotEmpty()
  @Prop()
  address1: string;

  @IsNotEmpty()
  @Prop()
  address2: string;

  @IsNotEmpty()
  @Prop()
  city_id: string;

  @IsNotEmpty()
  @Prop()
  state_id: string;

  @IsNotEmpty()
  @Prop()
  pin: number;
}

export interface IAddress {
  address1: string;
  address2: string;
  city_id: string;
  state_id: string;
  pin: number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
