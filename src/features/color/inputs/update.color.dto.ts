import { Field, InputType } from "@nestjs/graphql";
import { CreateColorDto } from "./create.color.dto";
import {Validate} from '@nestjs/class-validator';
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";

@InputType()
export class UpdateColorDto extends CreateColorDto {

  @Validate(IsValidMongooseId, ["Color"])  
  @Field(() => [String] )
  colorId: [string];

}