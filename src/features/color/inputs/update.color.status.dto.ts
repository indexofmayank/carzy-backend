import { Field, InputType } from "@nestjs/graphql";
import { EntityStatus } from "src/common/enums/entity-status.enums";
import { Validate } from "class-validator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";


@InputType()
export class UpdateColorStatusDto {

    @Validate(IsValidEnum, ["Color"])
    @Field(() => EntityStatus)
    status: string;


    @Validate(IsValidMongooseId, ["Color"])
    @Field(() => [String])
    colorId: [string];

}