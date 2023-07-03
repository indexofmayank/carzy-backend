import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TeleCallingEntryCreate {
  @Field()
  @IsNotEmpty()
  buyer_id: string;

  @Field()
  @IsNotEmpty()
  visited_next_date: string;

  @Field()
  @IsNotEmpty()
  next_visit_date: string;

  @Field()
  @IsNotEmpty()
  finance_required: boolean;

  @Field()
  @IsNotEmpty()
  remarks: string;

  @Field()
  @IsNotEmpty()
  next_call_date: string;

  @Field()
  @IsNotEmpty()
  created_by: string;

  @Field()
  @IsNotEmpty()
  specail_instruction: string;
}
