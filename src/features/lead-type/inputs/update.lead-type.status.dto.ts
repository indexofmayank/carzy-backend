import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { Status } from "src/status.enums";


@InputType()
export class UpdateLeadTypeStatusDto {

    @Validate(IsValidMongooseId, ["lead-type"])
    @Field(() => [String])
    leadTypeId: [string]

    @Validate(IsValidEnum, ["lead-type"])
    @Field(() => Status)
    status: string;

}