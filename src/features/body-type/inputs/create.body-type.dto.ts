import { IsEnum } from '@nestjs/class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Validate } from 'class-validator';
import { IsValidName } from 'src/common/validation-rule-decorators/name.decorator';
import { IsValidEnum } from 'src/common/validation-rule-decorators/validEnum.decorator';

import { EntityStatus } from 'src/common/enums/entity-status.enums';

@InputType()
export class CreateBodyTypeDto {

  @Validate(IsValidName, ['Body Type'])
  @Field(() => String)
  name: string;

  @Validate(IsValidEnum, ['Body Type'])
  @Field(() => EntityStatus, { nullable: true })
  status: EntityStatus;

  @Field(() => Date, { nullable: true })
  deleted_at: Date;
}
