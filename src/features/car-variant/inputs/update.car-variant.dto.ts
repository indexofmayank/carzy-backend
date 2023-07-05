import { Field, InputType } from "@nestjs/graphql";
import { CreateCarVariantDto } from "./create.car-variant.dto";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";


@InputType()
export class UpdateCarVariantDto extends CreateCarVariantDto {

  @Validate(IsValidMongooseId, ["Car-variant"])
  @Field(() => String)
  carVariantId: string;
}