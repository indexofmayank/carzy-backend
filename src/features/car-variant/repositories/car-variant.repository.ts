import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarVariant, CarVariantSchema } from '../schemas/car-variant.schema';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class CarVariantRepository extends EntityRepository<CarVariantSchema> {
  constructor(
    @InjectModel(CarVariant.name)
    private carVariantModel: Model<CarVariantSchema>,
  ) {
    super(carVariantModel);
  }
}
