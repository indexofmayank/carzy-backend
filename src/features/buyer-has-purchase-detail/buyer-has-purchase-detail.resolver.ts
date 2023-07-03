import { Args, ID, Mutation, Resolver, Query } from '@nestjs/graphql';
import { BuyerHasPurchaseDetailsService } from './services/buyer-has-purchase-detail.service';
import { BuyerHasPurchaseDetail } from './schemas/buyer-has-purchase-details.schema';
import { BuyerHasPurchaseDetailCreate } from './dtos/buyer-has-purchase-detail.create.dto';
import { BuyerHasPurchaseDetailUpdate } from './dtos/buyer-has-purchase-detail.update.dto';

@Resolver()
export class BuyerHasPurchaseDetailsResolver {
  constructor(
    private readonly buyer_has_purchase_details_service: BuyerHasPurchaseDetailsService,
  ) {}

  @Query(() => [BuyerHasPurchaseDetail], {
    name: 'listPurchaseDetails',
    nullable: true,
  })
  list(): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_details_service.getBuyerHasPurchaseDetails(
      3,
      1,
    );
  }

  @Query(() => BuyerHasPurchaseDetail, {
    name: 'getPurchaseDetail',
    nullable: true,
  })
  getBuyerHasPurchaseDetail(
    @Args({ name: 'purchaseDetailId', type: () => ID }) id: string,
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_details_service.getBuyerHasPurchaseDetailById(
      id,
    );
  }

  @Mutation(() => BuyerHasPurchaseDetail, { name: 'addPurchaseDetail' })
  addPurchaseDetail(
    @Args('addPurchaseDetailDto')
    addPurchaseDetailDto: BuyerHasPurchaseDetailCreate,
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_details_service.createBuyerHasPurchaseDetail(
      addPurchaseDetailDto.name,
      addPurchaseDetailDto.contact_no,
      addPurchaseDetailDto.requirement,
      addPurchaseDetailDto.car_number,
      addPurchaseDetailDto.call_type_id,
      addPurchaseDetailDto.lead_source_id,
      addPurchaseDetailDto.referral,
      addPurchaseDetailDto.lead_type_id,
    );
  }

  @Mutation(() => BuyerHasPurchaseDetail, { name: 'updatePurchaseDetail' })
  updatePurchaseDetail(
    @Args('updatePruchaseDetailDto')
    updatePurchaseDetailDto: BuyerHasPurchaseDetailUpdate,
    @Args('purchaseDetailId') purchaseDetailId: string,
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_details_service.updateBuyerHasPurchaseDetail(
      purchaseDetailId,
      updatePurchaseDetailDto,
    );
  }

  @Mutation(() => BuyerHasPurchaseDetail, { name: 'deletePurchaseDetail' })
  deletePurchaseDetail(
    @Args({ name: 'purchaseDetailId', type: () => ID }) id: string,
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_details_service.deleteBuyerHasPurchaseDetail(
      id,
    );
  }

  @Mutation(() => BuyerHasPurchaseDetail, { name: 'deleteManyPurchaseDetail' })
  deleteManyPurchaseDetail(
    @Args({ name: 'purchaseDetailIds', type: () => [ID] }) ids: [string],
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_details_service.deleteManyBuyerHasPurchaseDetail(
      ids,
    );
  }
}
