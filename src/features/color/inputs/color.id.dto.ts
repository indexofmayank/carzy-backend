import { Field, InputType } from "@nestjs/graphql";
import { Validate} from '@nestjs/class-validator';
import { IsValidMongooseId } from "src/common/validation-rule-decorators/mongoose.id.decorator";

@InputType()
export class ColorIdDto {

    @Validate(IsValidMongooseId, ["Color"])
    @Field(() => [String])
    colorId: [string];

}