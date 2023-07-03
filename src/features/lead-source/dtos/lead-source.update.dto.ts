import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';
import { Status } from 'src/status.enums';

@InputType()
export class LeadSoucreUpdateDto {
  @Field()
  name: string;

  @Field()
  status: Status;

  @Field()
  dealer_id: string;
}
