import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { CreateGarageDto } from "./create.garage.dto";


@InputType()
export class UpdateGarageDto extends CreateGarageDto{

  @Validate(IsValidMongooseId, ["garage"])
  @Field(() => [String])
  garageId: [string]

}