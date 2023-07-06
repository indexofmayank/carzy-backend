import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LeadTypeSchema, LeadTypes } from "./schemas/lead-types.schema";
import { LeadTypesService } from "./services/lead-types.service";
import { LeadTypesResolver } from "./lead-types.resolver";
import { LeadTypeRepository } from "./repositories/lead-type.repository";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LeadTypes.name, schema: LeadTypeSchema },
    ]),
  ],
  controllers: [],
  providers: [LeadTypeRepository, LeadTypesService, LeadTypesResolver],
})
export class LeadTypeModule {}
