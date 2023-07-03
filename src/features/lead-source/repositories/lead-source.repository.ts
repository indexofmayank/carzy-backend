import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LeadSource, LeadSourceSchema } from '../schemas/lead-source.schema';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class LeadSourcesRepository extends EntityRepository<LeadSourceSchema> {
  constructor(
    @InjectModel(LeadSource.name)
    private leadSourceModel: Model<LeadSourceSchema>,
  ) {
    super(leadSourceModel);
  }
}
