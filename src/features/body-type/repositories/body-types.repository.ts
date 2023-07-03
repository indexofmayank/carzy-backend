import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BodyType, BodyTypeSchema } from '../schemas/body-types.schema';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class BodyTypeRepository extends EntityRepository<BodyTypeSchema> {
  constructor(
    @InjectModel(BodyType.name) private bodyTypeModel: Model<BodyTypeSchema>,
  ) {
    super(bodyTypeModel);
  }
}
