import { Field, InputType } from '@nestjs/graphql';
import { CreateBrandDto } from './create.brand.dto';
import { Validate } from 'class-validator';
import { IsValidMongooseId } from 'src/common/validation-rule-decorators/mongoose.id.decorator';


@InputType()
export class UpdateBrandDto extends CreateBrandDto {

    @Field(() => [String], {nullable: true})
    @Validate(IsValidMongooseId, ['Brand-id'])
    brandId: [string];

}
