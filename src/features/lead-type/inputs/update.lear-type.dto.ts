import { Field, InputType } from "@nestjs/graphql";
import { CreateLeadTypeDto } from "./create.lead-type.dto";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";

@InputType()
export class UpdateLeadTypeDto extends CreateLeadTypeDto {

    @Validate(IsValidMongooseId, ["lead-type"])
    @Field(() => [String])
    leadTypeId: [string]

}