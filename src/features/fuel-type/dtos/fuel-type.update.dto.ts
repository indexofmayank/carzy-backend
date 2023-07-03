import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Status } from 'src/status.enums';

@InputType()
export class UpdateFuelTypeDto {
  @Field()
  name: string;

  @Field()
  status: Status;
}
