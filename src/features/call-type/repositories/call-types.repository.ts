import { Injectable } from '@nestjs/common';
import { CallType, CallTypeSchema } from '../schemas/call-types.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class CallTypesRepository extends EntityRepository<CallTypeSchema> {
  constructor(
    @InjectModel(CallType.name) private callTypeModel: Model<CallTypeSchema>,
  ) {
    super(callTypeModel);
  }
}
