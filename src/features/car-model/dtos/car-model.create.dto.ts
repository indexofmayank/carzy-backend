import { InputType } from '@nestjs/graphql';
import { UpdateCarModelDto } from './car-model.update.dto';

@InputType()
export class CreateCarModelDto extends UpdateCarModelDto {}
