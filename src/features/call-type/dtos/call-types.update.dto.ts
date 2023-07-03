import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';
import { Status } from 'src/status.enums';
@InputType()
export class CallTypeUpdateDto {
  @Field(() => String)
  name: string;

  @Field()
  status: string;

  @IsNotEmpty()
  @Field()
  dealer_id: string;
}
