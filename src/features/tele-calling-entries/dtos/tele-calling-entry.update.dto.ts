import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { IsMongoId } from '@nestjs/class-validator';

@InputType()
export class TeleCallingEntryUpdate {
  @IsMongoId({ message: 'Something wrong happned while resolving buyer field' })
  @Field()
  @IsNotEmpty({ message: 'Buyer field cannot be left empty' })
  buyer_id: string;

  @Field()
  @IsNotEmpty()
  visited_next_date: Date;

  @Field()
  @IsNotEmpty()
  next_visit_date: Date;

  @Field()
  @IsNotEmpty()
  finance_required: boolean;

  @Field()
  @IsNotEmpty()
  remarks: string;

  @Field()
  @IsNotEmpty()
  next_call_date: Date;

  @Field()
  @IsNotEmpty()
  created_by: string;

  @Field()
  @IsNotEmpty()
  specail_instruction: string;
}
