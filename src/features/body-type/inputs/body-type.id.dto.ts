import { Validate } from "@nestjs/class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";


@InputType()
export class BodyTypeIdDto {

    @Validate(IsValidMongooseId, ["Body-Type"])
    @Field(() => [String])
    bodyTypeId: [string];
}