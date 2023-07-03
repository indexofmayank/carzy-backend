import { Injectable } from '@nestjs/common';
import { Car, CarSchema } from '../schemas/car.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class CarRepository extends EntityRepository<CarSchema> {
  constructor(@InjectModel(Car.name) private carModel: Model<CarSchema>) {
    super(carModel);
  }
}
