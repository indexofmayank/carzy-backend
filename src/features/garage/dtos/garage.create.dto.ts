import { InputType } from '@nestjs/graphql';
import { UpdateGarageDto } from './garage.update.dto';

@InputType()
export class CreateGarageDto extends UpdateGarageDto {}
