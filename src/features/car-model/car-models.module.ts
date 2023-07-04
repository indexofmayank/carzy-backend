import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModel, CarModelSchema } from './schemas/car-model.schema';
import { CarModelsRepository } from './respositories/car-models.respository';
import { CarModelService } from './services/car-models.service';
import { CarModelResolver } from './car-model.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CarModel.name, schema: CarModelSchema },
    ]),
  ],
  controllers: [],
  providers: [CarModelsRepository, CarModelService, CarModelResolver],
})
export class CarModelModule {}
