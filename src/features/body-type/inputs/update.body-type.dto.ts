import { InputType } from "@nestjs/graphql";
import { CreateBodyTypeDto } from "./create.body-type.dto";

@InputType()
export class UpdateBodyTypeDto extends CreateBodyTypeDto {}