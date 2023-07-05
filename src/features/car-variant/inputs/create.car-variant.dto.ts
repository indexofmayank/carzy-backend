import { Validate } from "@nestjs/class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";
import { IsValidName } from "src/common/validation-rule-decorators/name.decorator";
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { Status } from "src/status.enums";


@InputType()
export class CreateCarVariantDto {

    @Validate(IsValidName, ["Car-Variant"])
    @Field(() => String, {nullable: true})
    name: string;

    @Validate(IsValidEnum, ["Car-Variant"])
    @Field(() => Status, {nullable: true})
    status: string;

    @Validate(IsValidMongooseId, ["Car-Variant", "can-null"])
    @Field(() => String, {nullable: true})
    model_id: string;

}