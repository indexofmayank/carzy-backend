import { Field, InputType } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { EntityStatus } from "src/common/enums/entity-status.enums";


@InputType()
export class UpdateCarVariantStatusDto {

    @Validate(IsValidEnum, ["Car-Variant"])
    @Field(() => EntityStatus)
    status: string;

    @Validate(IsValidMongooseId, ["Car-Variant"])
    @Field(() => [String])
    carVariantId: [string];

}