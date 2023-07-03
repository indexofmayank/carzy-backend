import { InputType } from '@nestjs/graphql';
import { CreateBrandDto } from './create.brand.dto';

@InputType()
export class UpdateBrandDto extends CreateBrandDto {}
