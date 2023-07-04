import { Field, InputType, Int } from "@nestjs/graphql";
import { CreateMakeYearDto } from "./create.make-year.dto";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";



@InputType()
export class UpdateMakeYearDto extends CreateMakeYearDto {

    @Validate(IsValidMongooseId, ["make-year"])
    @Field(() => [String])
    makeYearId: [string]

}