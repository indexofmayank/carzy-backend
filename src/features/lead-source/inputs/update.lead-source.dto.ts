import { Field, InputType } from "@nestjs/graphql";
import { CreateLeadSourceDto } from "./create.lead-source.dto";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";


@InputType()
export class UpdateLeadSourceDto extends CreateLeadSourceDto {

    @Validate(IsValidMongooseId, ["lead-source"])
    @Field(() => [String])
    leadSourceId: [string];
}