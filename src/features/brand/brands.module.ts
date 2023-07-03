import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Brand, BrandSchema } from './schemas/brand.schema';
import { BrandsService } from './services/brands.service';
import { BrandsRepository } from './repositories/brand.repository';
import { BrandsResolver } from './brands.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
  ],
  controllers: [],
  providers: [BrandsService, BrandsRepository, BrandsResolver],
})
export class BrandsModule {}
