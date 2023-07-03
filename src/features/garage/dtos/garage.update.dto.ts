import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

import { Status } from 'src/status.enums';

@InputType()
export class UpdateGarageDto {
  @Field()
  name: string;

  @Field()
  model_id: string;

  @Field()
  status: Status;
}
