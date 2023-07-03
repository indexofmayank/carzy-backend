import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Validate } from '@nestjs/class-validator';
import { Status } from 'src/status.enums';
import { IsValidName } from 'src/common/validation-rule-decorators/name.decorator';
import { IsValidEnum } from 'src/common/validation-rule-decorators/validEnum.decorator';

@InputType()
export class CreateBrandDto {
  @Validate(IsValidName, ['Create Brand'])
  @Field(() => String, { nullable: true })
  name: string;

  @Validate(IsValidEnum, ['Brand'])
  @Field(() => Status, { nullable: true })
  status: Status;

  @Field(() => Date, { nullable: true })
  deleted_at: Date;
}
