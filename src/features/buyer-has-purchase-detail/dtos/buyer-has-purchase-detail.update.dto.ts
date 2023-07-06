import { InputType, Field } from "@nestjs/graphql";
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsInt,
  IsMongoId,
  isNotEmpty,
} from "@nestjs/class-validator";
import { EntityStatus } from "src/common/enums/entity-status.enums";
@InputType()
export class BuyerHasPurchaseDetailUpdate {
  @IsString({ message: "Name can only contains alphabet" })
  @MinLength(3, { message: "Name must contain atleat 3 character" })
  @MaxLength(20, { message: "Name can only contains 20 character" })
  @IsNotEmpty({ message: "Name field cannot be empty" })
  @Field()
  name: string;

  @IsInt({ message: "Please enter valid phone number" })
  @IsNotEmpty({ message: "Phone field cannot be empty" })
  @Field()
  contact_no: number;

  @Field()
  @IsNotEmpty({ message: "Requirement field cannot be empty" })
  requirement: string;

  @IsNotEmpty()
  @Field()
  car_number: string;

  @IsMongoId({
    message: "Something wrong happen while resolving the call-type",
  })
  @Field()
  @IsNotEmpty()
  call_type_id: string;

  @IsMongoId({
    message: "Something wrong happen while resolving the lead-source",
  })
  @Field()
  @IsNotEmpty()
  lead_source_id: string;

  @IsMongoId({ message: "Something wrong happen while resolvig the lead-type" })
  @Field()
  @IsNotEmpty()
  lead_type_id: string;

  @IsString()
  @Field()
  @IsNotEmpty()
  referral: string;

  @Field()
  status: EntityStatus;
}
