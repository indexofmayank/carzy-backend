import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { Status } from "src/status.enums";


@InputType()
export class CreateLeadSourceDto {

    @Validate(IsValidName, ["lead-source"])
    @Field(() => String)
    name: string;

    @Validate(IsValidEnum, ["lead-source"])
    @Field(() => Status, {nullable: true})
    status: string;

    @Validate(IsValidEnum, ["lead-source"])
    @Field(() => [String], {nullable: true})
    dealer_id: [string]

}
