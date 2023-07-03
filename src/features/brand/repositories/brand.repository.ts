import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand, BrandSchema } from '../schemas/brand.schema';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class BrandsRepository extends EntityRepository<BrandSchema> {
  constructor(@InjectModel(Brand.name) private brandModel: Model<BrandSchema>) {
    super(brandModel);
  }
}
