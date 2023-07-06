import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { EntityStatus } from "src/common/enums/entity-status.enums";

@InputType()
export class CreateCarModelDto {

    @Field(() => String, { nullable: true })
    @Validate(IsValidName, ["Car-Model"])
    name: string;

    @Field(() => EntityStatus, { nullable: true })
    @Validate(IsValidEnum, ["Car-Model"])
    status: EntityStatus;

    @Field(() => String, { nullable: true })
    @Validate(IsValidMongooseId, ["Body-Type", "can-null"])
    body_type_id: string;


    @Field(() => String, { nullable: true })
    @Validate(IsValidMongooseId, ["Brand", "can-null"])
    brand_id: string;
}