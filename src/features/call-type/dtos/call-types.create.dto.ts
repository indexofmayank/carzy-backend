import { InputType } from '@nestjs/graphql';
import { CallTypeUpdateDto } from './call-types.update.dto';

@InputType()
export class CallTypeCreateDto extends CallTypeUpdateDto {}
