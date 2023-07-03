import { InputType } from '@nestjs/graphql';
import { DealerUpdateDto } from './dealer.update.dto';

@InputType()
export class DealerCreateDto extends DealerUpdateDto {}
