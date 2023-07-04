import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";


@InputType()
export class LeadSourceIdDto {

    @Validate(IsValidEnum, ["lead-source"])
    @Field(() => [String])
    leadSourceId: [string];
}