import { Injectable } from '@nestjs/common';
import { FuelType, FuelTypeSchema } from '../schemas/fuel-type.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class FuelTypeRepository extends EntityRepository<FuelTypeSchema> {
  constructor(
    @InjectModel(FuelType.name) private fuelTypeModel: Model<FuelTypeSchema>,
  ) {
    super(fuelTypeModel);
  }
}
