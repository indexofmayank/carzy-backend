import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsMongoId,
} from '@nestjs/class-validator';
import { Status } from 'src/status.enums';

@InputType()
export class LeadTypeUpdateDto {
  @IsString({ message: 'Name can only contains alphabet' })
  @MinLength(3, { message: 'Name must contain atleat 3 character' })
  @MaxLength(20, { message: 'Name can only contains 20 character' })
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  @Field()
  name: string;

  @Field()
  status: Status;

  @IsMongoId({
    message: 'Something wrong happend while resolving the dealer field',
  })
  @IsNotEmpty({ message: 'Dealer feild cannot be empty' })
  @Field()
  dealer_id: string;
}
