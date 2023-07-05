import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeadSource, LeadSourceSchema } from './schemas/lead-source.schema';
import { LeadSourcesRepository } from './repositories/lead-source.repository';
import { LeadSourceService } from './services/lead-source.service';
import { LeadSourceResolver } from './lead-source.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LeadSource.name, schema: LeadSourceSchema },
    ]),
  ],
  controllers: [],
  providers: [LeadSourcesRepository, LeadSourceService, LeadSourceResolver],
})
export class LeadSourceModule {}
