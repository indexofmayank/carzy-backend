import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { EntityStatus } from "src/common/enums/entity-status.enums";


@InputType()
export class CreateLeadSourceDto {

    @Validate(IsValidName, ["lead-source"])
    @Field(() => String)
    name: string;

    @Validate(IsValidEnum, ["lead-source"])
    @Field(() => EntityStatus, { nullable: true })
    status: string;

    @Validate(IsValidEnum, ["lead-source"])
    @Field(() => [String], { nullable: true })
    dealer: [string]

}
