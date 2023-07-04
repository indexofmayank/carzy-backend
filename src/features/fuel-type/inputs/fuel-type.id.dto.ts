import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";


@InputType()
export class FuelTypeIdDto {

    @Validate(IsValidMongooseId, ["fuel-type"])
    @Field(() => [String])
    fuelTypeId: [string]
}