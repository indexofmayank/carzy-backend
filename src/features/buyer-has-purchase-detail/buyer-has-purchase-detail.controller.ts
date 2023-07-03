import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { BuyerHasPurchaseDetailsService } from './services/buyer-has-purchase-detail.service';
import { BuyerHasPurchaseDetail } from './schemas/buyer-has-purchase-details.schema';
import { BuyerHasPurchaseDetailCreate } from './dtos/buyer-has-purchase-detail.create.dto';
import { BuyerHasPurchaseDetailUpdate } from './dtos/buyer-has-purchase-detail.update.dto';

@Controller('buyer-has-purchase-detail')
export class BuyerHasPurchaseDetailsController {
  constructor(
    public readonly buyer_has_purchase_detail_service: BuyerHasPurchaseDetailsService,
  ) {}

  @Get(':purchaseDetailId')
  async getPurchaseDetailById(
    @Param('purchaseDetailId') purchaseDetailId: string,
  ): Promise<BuyerHasPurchaseDetail> {
    return this.buyer_has_purchase_detail_service.getBuyerHasPurchaseDetailById(
      purchaseDetailId,
    );
  }

  @Get()
  async getPurchaseDetails(): Promise<BuyerHasPurchaseDetail[] | any> {
    return this.buyer_has_purchase_detail_service.getBuyerHasPurchaseDetails(
      3,
      1,
    );
  }

  @Post()
  async createPurchaseDetail(
    @Body() createPurchaseDetailDto: BuyerHasPurchaseDetailCreate,
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_detail_service.createBuyerHasPurchaseDetail(
      createPurchaseDetailDto.name,
      createPurchaseDetailDto.contact_no,
      createPurchaseDetailDto.requirement,
      createPurchaseDetailDto.car_number,
      createPurchaseDetailDto.call_type_id,
      createPurchaseDetailDto.lead_source_id,
      createPurchaseDetailDto.lead_type_id,
      createPurchaseDetailDto.referral,
    );
  }

  @Put(':purchaseDetailId')
  async updatePurchaseDetail(
    @Param('purchaseDetailId') purchaseDetailId: string,
    @Body() updatePurchaseDetailDto: BuyerHasPurchaseDetailUpdate,
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_detail_service.updateBuyerHasPurchaseDetail(
      purchaseDetailId,
      updatePurchaseDetailDto,
    );
  }

  @Delete(':purchaseDetailId')
  async deletePurchaseDetail(
    @Param('purchaseDetailId') purchaseDetailId: string,
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_detail_service.deleteBuyerHasPurchaseDetail(
      purchaseDetailId,
    );
  }

  @Delete()
  async deleteManyPurchaseDetail(
    @Param('purchaseDetailIds') purchaseDetailIds: [string],
  ): Promise<boolean> {
    return this.buyer_has_purchase_detail_service.deleteManyBuyerHasPurchaseDetail(
      purchaseDetailIds,
    );
  }
}
