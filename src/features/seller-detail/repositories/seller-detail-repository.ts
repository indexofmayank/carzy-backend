import { Injectable } from '@nestjs/common';
import {
  SellerDetail,
  SellerDetailSchema,
} from '../schemas/seller-detial.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class SellerDetailRepository extends EntityRepository<SellerDetailSchema> {
  constructor(
    @InjectModel(SellerDetail.name)
    private sellerDetailModel: Model<SellerDetailSchema>,
  ) {
    super(sellerDetailModel);
  }
}
