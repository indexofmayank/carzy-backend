import { Field, ID, InputType } from "@nestjs/graphql";
import {Validate} from '@nestjs/class-validator';
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";

@InputType()
export class DeleteBodyTypeDto{

   @Validate(IsValidMongooseId, ["Body-Type"])
   @Field(() => [String])
   bodyTypeId: [string];
}