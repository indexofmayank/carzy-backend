import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateDealerInput {

    @IsNotEmpty()
    @Field()
    name: string;

    @IsNotEmpty()
    @Field()
    address: string;

    @IsNotEmpty()
    @Field()
    password: string;

    @IsNotEmpty()
    @Field()
    confirm_password: string;

    @IsNotEmpty()
    @Field()
    email: string;

    @IsNotEmpty()
    @Field()
    phone: string;
}
