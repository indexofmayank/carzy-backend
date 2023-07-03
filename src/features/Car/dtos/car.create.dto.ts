import { InputType } from '@nestjs/graphql';
import { UpdateCarDto } from './car.update.dto';

@InputType()
export class CreateCarDto extends UpdateCarDto {}
