import { Field, InputType } from "@nestjs/graphql";
import { CreateBodyTypeDto } from "./create.body-type.dto";
import { Validate } from "@nestjs/class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";

@InputType()
export class UpdateBodyTypeDto extends CreateBodyTypeDto {

    @Validate(IsValidMongooseId, ["Body-Type"])
    @Field(() => String)
    bodyTypeId: string;
}