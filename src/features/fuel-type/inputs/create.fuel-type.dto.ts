import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { EntityStatus } from "src/common/enums/entity-status.enums";


@InputType()
export class CreateFuelTypeDto {

    @Validate(IsValidName, ["fuel-type"])
    @Field(() => String, { nullable: true })
    name: string;

    @Validate(IsValidEnum, ["fuel-type"])
    @Field(() => EntityStatus, { nullable: true })
    status: string;
}