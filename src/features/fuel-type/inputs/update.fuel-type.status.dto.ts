import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { EntityStatus } from "src/common/enums/entity-status.enums";


@InputType()
export class UpdateFuelTypeStatusDto {


    @Validate(IsValidEnum, ["fuel-type"])
    @Field(() => EntityStatus)
    status: string;

    @Validate(IsValidEnum, ["fuel-type"])
    @Field(() => [String])
    fuelTypeId: [string]

}