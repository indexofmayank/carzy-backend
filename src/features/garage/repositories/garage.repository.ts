import { Injectable } from '@nestjs/common';
import { Garage, GarageSchema } from '../schemas/garage.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class GarageRepository extends EntityRepository<GarageSchema> {
  constructor(
    @InjectModel(Garage.name) private garageModel: Model<GarageSchema>,
  ) {
    super(garageModel);
  }
}
