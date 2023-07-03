import { Field, ID, InputType } from "@nestjs/graphql";
import { IsEnum, Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { Status } from "src/status.enums";


@InputType()
export class UpdateBodyTypeStatusDto {

    @Validate(IsValidEnum, ["Body-Type"])
    @Field(() => Status)
    status: Status;

    @Validate(IsValidMongooseId, ["Body-Type "])
    @Field(() => ID)
    bodyTypeId: string;

}