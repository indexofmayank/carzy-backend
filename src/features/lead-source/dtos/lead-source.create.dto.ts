import { InputType } from '@nestjs/graphql';
import { LeadSoucreUpdateDto } from './lead-source.update.dto';

@InputType()
export class LeadSourceCreateDto extends LeadSoucreUpdateDto {}
