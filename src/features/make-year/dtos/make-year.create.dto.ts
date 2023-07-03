import { InputType } from '@nestjs/graphql';
import { UpdateMakeYearDto } from './make-year.update.dto';

@InputType()
export class CreateMakeYearDto extends UpdateMakeYearDto {}
