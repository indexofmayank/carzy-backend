import { Field, InputType } from "@nestjs/graphql";
import { CreateCarModelDto } from "./create.car-model.dto";
import { Validate } from "@nestjs/class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";



@InputType()
export class UpdateCarModelDto extends CreateCarModelDto {

  @Field(() => String)
  @Validate(IsValidMongooseId, ["Car-Model-Id"])
  carModelId: string;

}