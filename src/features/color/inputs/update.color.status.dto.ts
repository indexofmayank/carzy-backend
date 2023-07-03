import { Field, InputType } from "@nestjs/graphql";
import { Status } from "src/status.enums";
import {Validate} from 'class-validator';
import { IsValidEnum } from "src/common/validation-rule-decorators/validEnum.decorator";
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";


@InputType()
export class UpdateColorStatusDto {

    @Validate(IsValidEnum, ["Color"])
    @Field(() => Status)
    status: string;


    @Validate(IsValidMongooseId, ["Color"])
    @Field(() => [String])
    colorId: [string];

}