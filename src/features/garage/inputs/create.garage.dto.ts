import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { EntityStatus } from "src/common/enums/entity-status.enums";


@InputType()
export class CreateGarageDto {

    @Validate(IsValidName, ["garage"])
    @Field(() => String)
    name: string;

    @Validate(IsValidMongooseId, ["garage"])
    @Field(() => [String])
    model_id: [string]


    @Validate(IsValidEnum, ["garage"])
    @Field(() => EntityStatus, { nullable: true })
    status: string;
}