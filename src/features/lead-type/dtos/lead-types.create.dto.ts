import { InputType } from '@nestjs/graphql';
import { LeadSoucreUpdateDto } from 'src/features/lead-source/dtos/lead-source.update.dto';

@InputType()
export class LeadTypeCreateDto extends LeadSoucreUpdateDto {}
