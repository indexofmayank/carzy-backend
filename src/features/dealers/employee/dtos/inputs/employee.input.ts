import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, isNumberString } from '@nestjs/class-validator';
import { IsNumberString } from 'class-validator';

@InputType()
export class EmployeeInput {

  @IsAlpha()
  @Field(() => String)
  first_name: string;

  @IsAlpha()
  @Field(() => String)
  last_name: string;

  @IsNumberString()
  @Field()
  phone: string;
}
