import { InputType, Field } from '@nestjs/graphql';
import {
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';

@InputType()
export class UpdateCarDto {
  @IsNotEmpty()
  @IsMongoId()
  @Field()
  brand_id: string;

  @IsNotEmpty()
  @IsMongoId()
  @Field()
  variant_id: string;

  @IsNotEmpty()
  @IsMongoId()
  @Field()
  color_id: string;

  @IsNotEmpty()
  @IsMongoId()
  @Field()
  body_type_id: string;

  @IsNotEmpty()
  @IsMongoId()
  @Field()
  make_year_id: string;

  @IsNotEmpty()
  @IsMongoId()
  @Field()
  fuel_type_id: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  transmission: string;

  @IsInt({ message: 'Please enter valid number' })
  @Min(1, { message: 'No of owners have atleast One owner' })
  @Max(5, { message: 'No of owners cannot exceed more than or equal to Five' })
  @IsNotEmpty()
  @Field()
  no_of_owners: number;

  @Min(1, { message: 'price cannot less than or equal to One' })
  @IsInt({ message: 'Please enter valid price' })
  @IsNotEmpty()
  @Field()
  price: number;

  @IsInt({ message: 'Please enter valid Kilo Meters' })
  @IsNotEmpty()
  @Field()
  kilometers: number;

  @Max(20, {
    message: 'No of capacity cannot have greater than or equal to Twenty',
  })
  @Min(2, { message: 'No of capacity must have greater than or equal to Two' })
  @IsInt({ message: 'Please enter a valid number of capactiy' })
  @IsNotEmpty()
  @Field()
  capacity: number;

  @IsNotEmpty()
  @IsMongoId()
  @Field()
  garage_id: string;

  @IsInt({ message: 'Please enter a valid number' })
  @IsNotEmpty()
  @Field()
  car_number: number;

  // @MaxLength(20, {message: "Chassis no cannot be greater than 20 character"})
  // @MinLength(12, {message: "Chassis no cannot be less than 13 character"})
  @IsInt()
  @IsNotEmpty()
  @Field()
  chassis_no: number;

  // @Min(20, {message: "Engine no cannot be greater than or equal to 20 character"})
  // @Max(13, {message: "Engine no cannot be less than 13 character"})
  @IsInt()
  @IsNotEmpty()
  @Field()
  engine_no: number;

  @IsString()
  @IsNotEmpty()
  @Field()
  tax_valid_at: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  seller_id: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  insurance_type: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  idv: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  ncv: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  traffic_case: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  solved_by: string;

  @IsInt()
  @IsNotEmpty()
  @Field()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @Field()
  description: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  main_image_name: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  main_image_custom_name: string;

  @IsNotEmpty()
  @Field(() => [String])
  car_images: [string];

  @IsString()
  @IsNotEmpty()
  @Field()
  status: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  created_by: string;
}
