import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { Status } from "src/status.enums";


@InputType()
export class UpdateFuelTypeStatusDto {


    @Validate(IsValidEnum, ["fuel-type"])
    @Field(() => Status)
    status: string;

    @Validate(IsValidEnum, ["fuel-type"])
    @Field(() => [String])
    fuelTypeId: [string]

}