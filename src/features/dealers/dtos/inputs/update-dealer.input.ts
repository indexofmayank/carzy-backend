import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';
import { CreateDealerInput } from './create-dealer.input';

@InputType()
export class UpdateDealerInput extends CreateDealerInput {
    @IsNotEmpty()
    @Field()
    id: string;
}
