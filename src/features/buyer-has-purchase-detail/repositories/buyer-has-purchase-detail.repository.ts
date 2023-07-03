import { Injectable } from '@nestjs/common';
import {
  BuyerHasPurchaseDetailSchema,
  BuyerHasPurchaseDetail,
} from '../schemas/buyer-has-purchase-details.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class BuyerHasPurchaseDetailsRepository extends EntityRepository<BuyerHasPurchaseDetailSchema> {
  constructor(
    @InjectModel(BuyerHasPurchaseDetail.name)
    private buyerHasPurchaseDetailModel: Model<BuyerHasPurchaseDetailSchema>,
  ) {
    super(buyerHasPurchaseDetailModel);
  }
}
