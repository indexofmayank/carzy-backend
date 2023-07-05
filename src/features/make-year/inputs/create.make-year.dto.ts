import { Field, InputType, Int } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { IsValidYear } from "src/common/validation-rule-decorators/year.decorator";


@InputType()
export class CreateMakeYearDto {

    @Validate(IsValidYear, ["make-year"])
    @Field(() => Int)
    year: number;

    @Validate(IsValidEnum, ["make-year"])
    @Field(() => String, {nullable: true})
    status: string;
}