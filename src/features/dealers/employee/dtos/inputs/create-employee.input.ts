import { Field, InputType } from '@nestjs/graphql';
// import { IsEmail } from 'class-validator';
import { EmployeeInput } from './employee.input';
import { IntersectionType } from '@nestjs/mapped-types';
import { IsAlpha, IsEmail } from '@nestjs/class-validator';
import { IsString, IsStrongPassword, isString } from 'class-validator';

// extends IntersectionType(EmployeeInput)
@InputType()
export class CreateEmployeeInput extends EmployeeInput {
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @Field()
  password: string;

  @Field()
  @IsString()
  confirm_password: string;
}
