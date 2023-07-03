import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuelType, FuelTypeSchema } from './schemas/fuel-type.schema';
import { FuelTypeRepository } from './repositories/fuel-type.repository';
import { FuelTypeService } from './services/fuel-type.services';
import { FuelTypeController } from './fuel-types.controller';
import { FuelTypeResolver } from './fuel-types.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FuelType.name, schema: FuelTypeSchema },
    ]),
  ],
  controllers: [FuelTypeController],
  providers: [FuelTypeRepository, FuelTypeService, FuelTypeResolver],
})
export class FuelTypesModule {}
