import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "@nestjs/class-validator";
import { EntityStatus } from "src/common/enums/entity-status.enums";
@InputType()
export class CallTypeUpdateDto {
  @Field(() => String)
  name: string;

  @Field()
  status: string;

  @IsNotEmpty()
  @Field()
  dealer: string;
}
