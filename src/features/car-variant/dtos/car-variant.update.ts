import { IsEnum } from '@nestjs/class-validator';
import { Field, InputType, ID } from '@nestjs/graphql';
import { Status } from 'src/status.enums';

@InputType()
export class UpdateCarVariantDto {
  @Field()
  name: string;

  @Field()
  status: Status;

  @Field(() => ID)
  model_id: string;
}
