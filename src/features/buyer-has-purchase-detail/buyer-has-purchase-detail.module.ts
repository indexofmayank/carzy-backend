import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BuyerHasPurchaseDetailSchema,
  BuyerHasPurchaseDetail,
} from './schemas/buyer-has-purchase-details.schema';
import { BuyerHasPurchaseDetailsController } from './buyer-has-purchase-detail.controller';
import { BuyerHasPurchaseDetailsRepository } from './repositories/buyer-has-purchase-detail.repository';
import { BuyerHasPurchaseDetailsService } from './services/buyer-has-purchase-detail.service';
import { BuyerHasPurchaseDetailsResolver } from './buyer-has-purchase-detail.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BuyerHasPurchaseDetail.name,
        schema: BuyerHasPurchaseDetailSchema,
      },
    ]),
  ],
  controllers: [BuyerHasPurchaseDetailsController],
  providers: [
    BuyerHasPurchaseDetailsRepository,
    BuyerHasPurchaseDetailsService,
    BuyerHasPurchaseDetailsResolver,
  ],
})
export class BuyerHasPurchaseDetailsModule {}
