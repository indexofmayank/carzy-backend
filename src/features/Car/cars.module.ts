import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schemas/car.schema';
import { CarService } from './services/car.service';
import { CarController } from './cars.controller';
import { CarsResolver } from './cars.resolver';
import { CarRepository } from './repositories/car.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarController],
  providers: [CarRepository, CarService],
})
export class CarsModule {}
