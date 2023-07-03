import { InputType } from '@nestjs/graphql';
import { UpdateFuelTypeDto } from './fuel-type.update.dto';

@InputType()
export class CreateFuelTypeDto extends UpdateFuelTypeDto {}
