import { InputType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

import { Status } from 'src/status.enums';

@InputType()
export class UpdateCarModelDto {
  @Field()
  name: string;

  @Field()
  status: Status;

  @Field()
  created_by: string;

  @Field(() => ID)
  body_type_id: string;

  @Field(() => ID)
  brand_id: string;
}
