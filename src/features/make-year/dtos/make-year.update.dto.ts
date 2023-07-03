import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEnum, IsInt, Min, Max } from 'class-validator';
import { Status } from 'src/status.enums';

@InputType()
export class UpdateMakeYearDto {
  @Max(2070, { message: 'Year must be within 2070' })
  @Min(1999, { message: 'Year must be greater 1999' })
  @IsInt()
  @IsNotEmpty({ message: 'Year field cannot be empty' })
  @Field()
  year: number;

  @Field()
  status: Status;
}
