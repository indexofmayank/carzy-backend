import { Field, InputType } from '@nestjs/graphql';
import { EmployeeInput } from './employee.input';

@InputType()
export class UpdateEmployeeInput extends EmployeeInput {
  @Field()
  id: string;
}
