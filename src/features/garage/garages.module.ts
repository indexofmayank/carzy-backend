import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Garage, GarageSchema } from './schemas/garage.schema';
import { GarageRepository } from './repositories/garage.repository';
import { GarageService } from './services/garage.service';
import { GarageResolver } from './garage.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Garage.name, schema: GarageSchema }]),
  ],
  controllers: [],
  providers: [GarageRepository, GarageService, GarageResolver],
})
export class GaragesModule {}
