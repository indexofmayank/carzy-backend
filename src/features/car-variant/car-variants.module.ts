import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarVariant, CarVariantSchema } from './schemas/car-variant.schema';
import { CarVariantRepository } from './repositories/car-variant.repository';
import { CarVariantService } from './services/car-varaint.service';
import { CarVariantResolver } from './car-variant.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CarVariant.name, schema: CarVariantSchema },
    ]),
  ],
  controllers: [],
  providers: [CarVariantRepository, CarVariantService, CarVariantResolver],
})
export class CarVariantsModule {}
