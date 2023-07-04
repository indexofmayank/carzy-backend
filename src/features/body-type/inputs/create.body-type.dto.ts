import { IsEnum } from '@nestjs/class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Validate } from 'class-validator';
import { IsValidName } from 'src/common/validation-rule-decorators/name.decorator';
import { IsValidEnum } from 'src/common/validation-rule-decorators/validEnum.decorator';

import { Status } from 'src/status.enums';

@InputType()
export class CreateBodyTypeDto {
  
  @Validate(IsValidName, ["Body Type"])
  @Field(() => String)
  name: string;

  @Validate(IsValidEnum, ["Body Type"])
  @Field(() => Status, {nullable: true})
  status: Status;

  @Field(() => Date, {nullable: true})
  deleted_at: Date;
}
