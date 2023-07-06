import { Validate } from "@nestjs/class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { EntityStatus } from "src/common/enums/entity-status.enums";


@InputType()
export class CreateColorDto {

    @Validate(IsValidName, ["Color"])
    @Field(() => String, { nullable: true })
    name: string;

    @Validate(IsValidEnum, ["Color"])
    @Field(() => EntityStatus, { nullable: true })
    status: EntityStatus;

}