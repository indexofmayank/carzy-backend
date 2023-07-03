import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';

@Schema({ _id: false })
export class SpouseDetail {
  @IsNotEmpty()
  @Prop()
  name: string;

  @IsNotEmpty()
  @Prop()
  contact: number;

  @IsNotEmpty()
  @Prop()
  dob: string;

  @IsNotEmpty()
  @Prop()
  special_instruction: string;

  @IsNotEmpty()
  @Prop()
  picture: string;
}

export interface ISpouseDetail {
  name: string;
  contact: number;
  dob: string;
  special_instruction: string;
  picture: string;
}

export const SpouseDetailSchema = SchemaFactory.createForClass(SpouseDetail);
