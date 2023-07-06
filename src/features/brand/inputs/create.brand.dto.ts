import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Validate } from '@nestjs/class-validator';
import { EntityStatus } from 'src/common/enums/entity-status.enums';
import { IsValidName } from 'src/common/validation-rule-decorators/name.decorator';
import { IsValidEnum } from 'src/common/validation-rule-decorators/validEnum.decorator';

@InputType()
export class CreateBrandDto {
  @Validate(IsValidName, ['Create Brand'])
  @Field(() => String, { nullable: true })
  name: string;

  @Validate(IsValidEnum, ['Brand'])
  @Field(() => EntityStatus, { nullable: true })
  status: EntityStatus;

  @Field(() => Date, { nullable: true })
  deleted_at: Date;
}
