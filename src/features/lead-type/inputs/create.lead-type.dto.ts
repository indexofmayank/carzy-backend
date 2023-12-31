import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { EntityStatus } from "src/common/enums/entity-status.enums";


@InputType()
export class CreateLeadTypeDto {

    @Validate(IsValidName, ["lead-type"])
    @Field(() => String)
    name: string;

    @Validate(IsValidEnum, ["lead-type"])
    @Field(() => EntityStatus, { nullable: true })
    status: string;

    @Validate(IsValidMongooseId, ["lead-source", "can-null"])
    @Field(() => String, { nullable: true })
    dealer: string

}