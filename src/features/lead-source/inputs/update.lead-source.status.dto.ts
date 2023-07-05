import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { Status } from "src/status.enums";


@InputType()
export class UpdateLeadSourceStatusDto {


    @Validate(IsValidEnum, ["lead-source"])
    @Field(() => Status)
    status: string;

    @Validate(IsValidMongooseId, ["lead-source"])
    @Field(() => [String])
    leadSourceId: [string];
}