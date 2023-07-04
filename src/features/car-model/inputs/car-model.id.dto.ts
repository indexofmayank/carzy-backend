import { Validate } from "@nestjs/class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";


@InputType()
export class CarModelIdDto {

    @Validate(IsValidMongooseId, ["Car-Model"])
    @Field(() => [String])
    carModelId: [string];

}