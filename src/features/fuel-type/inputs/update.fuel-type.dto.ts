import { Field, InputType } from "@nestjs/graphql";
import { CreateFuelTypeDto } from "./create.fuel-type.dto";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";


@InputType()
export class UpdateFuelTypeDto extends CreateFuelTypeDto {


  @Validate(IsValidMongooseId, ["fuel-type"])
  @Field(() => [String])
  fuelTypeId: [string]

}