import { Field, ID, InputType } from '@nestjs/graphql';
import { IsEnum, Validate } from 'class-validator';
import { IsValidMongooseId } from 'src/common/validation-rule-decorators/mongoose.id.decorator';
import { IsValidEnum } from 'src/common/validation-rule-decorators/validEnum.decorator';
import { EntityStatus } from 'src/common/enums/entity-status.enums';


@InputType()
export class UpdateBodyTypeStatusDto {

    @Validate(IsValidEnum, ['Body-Type'])
    @Field(() => EntityStatus)
    status: EntityStatus;

    @Validate(IsValidMongooseId, ['Body-Type '])
    @Field(() => ID)
    bodyTypeId: string;

}