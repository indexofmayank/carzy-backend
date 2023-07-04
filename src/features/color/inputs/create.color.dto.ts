import { Validate } from "@nestjs/class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { Status } from "src/status.enums";


@InputType()
export class CreateColorDto {

    @Validate(IsValidName, ["Color"])
    @Field(() => String, {nullable: true})
    name: string;

    @Validate(IsValidEnum, ["Color"])
    @Field(() => Status, {nullable: true})
    status: Status;

}