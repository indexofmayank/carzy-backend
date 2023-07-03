import { InputType } from '@nestjs/graphql';
import { UpdateCarVariantDto } from './car-variant.update';

@InputType()
export class CreateCarVariantDto extends UpdateCarVariantDto {}
