import { IsNotEmpty, IsString } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class AuthenticateDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;
}
