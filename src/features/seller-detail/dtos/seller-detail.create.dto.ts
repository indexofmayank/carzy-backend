import { InputType, Field } from "@nestjs/graphql";
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsInt,
  IsEmail,
} from "class-validator";

@InputType()
export class CreateSellerDetailDto {
  @IsString({ message: "Name can only contains alphabet" })
  @MinLength(3, { message: "Name must contain atleat 3 character" })
  @MaxLength(20, { message: "Name can only contains 20 character" })
  @IsNotEmpty({ message: "Name field cannot be empty" })
  @Field()
  name: string;

  @IsNotEmpty({ message: "Address Field cannot be empty" })
  @Field()
  address: string;

  @IsNotEmpty({ message: "Zip code field cannot be empty" })
  @Field()
  zip_code: string;

  @IsInt({ message: "Please enter valid phone number" })
  @IsNotEmpty({ message: "Phone field cannot be empty" })
  @Field()
  phone: number;

  @IsInt({ message: "Please enter valid alternative number" })
  @IsNotEmpty({ message: "Alternative number field cannot be empty" })
  @Field()
  alternative_no: number;

  @IsEmail()
  @IsNotEmpty({ message: "Email Id field cannot be empty" })
  @Field()
  email: string;

  @IsEmail()
  @IsNotEmpty({ message: "Alternative Email cannot be empty" })
  @Field()
  alternate_email: string;

  @IsNotEmpty({ message: "Dob field cannot be empty" })
  @Field()
  dob: string;
}
