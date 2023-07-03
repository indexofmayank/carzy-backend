import { Injectable } from '@nestjs/common';
import { LeadTypeSchema, LeadTypes } from '../schemas/lead-types.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class LeadTypeRepository extends EntityRepository<LeadTypeSchema> {
  constructor(
    @InjectModel(LeadTypes.name) private leadTypesModel: Model<LeadTypeSchema>,
  ) {
    super(leadTypesModel);
  }
}
