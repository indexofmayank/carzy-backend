import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {
  SellerDetail,
  SellerDetailSchema,
} from "./schemas/seller-detial.schema";
import { SellerDetailRepository } from "./repositories/seller-detail-repository";
import { SellerDetailService } from "./services/seller-detail.service";
import { SellerDetailsController } from "./seller-detials.controller";
import { SellerDetailResolver } from "./seller-details.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SellerDetail.name, schema: SellerDetailSchema },
    ]),
  ],
  controllers: [SellerDetailsController],
  providers: [
    SellerDetailRepository,
    SellerDetailService,
    SellerDetailResolver,
  ],
})
export class SellerDetialsModule {}
