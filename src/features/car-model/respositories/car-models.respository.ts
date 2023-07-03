import { Injectable } from '@nestjs/common';
import { CarModelSchema, CarModel } from '../schemas/car-model.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class CarModelsRepository extends EntityRepository<CarModelSchema> {
  constructor(
    @InjectModel(CarModel.name) private carModel: Model<CarModelSchema>,
  ) {
    super(carModel);
  }
}
