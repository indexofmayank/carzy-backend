import { Injectable } from "@nestjs/common";
import { BuyerHasPurchaseDetailsRepository } from "../repositories/buyer-has-purchase-detail.repository";
import { BuyerHasPurchaseDetailUpdate } from "../dtos/buyer-has-purchase-detail.update.dto";
import { BuyerHasPurchaseDetail } from "../schemas/buyer-has-purchase-details.schema";

@Injectable()
export class BuyerHasPurchaseDetailsService {
  constructor(
    private readonly buyer_has_purchase_details_repository: BuyerHasPurchaseDetailsRepository,
  ) {}

  async getBuyerHasPurchaseDetailById(
    buyer_has_purchase_details_objectId,
  ): Promise<BuyerHasPurchaseDetail | any> {
    return this.buyer_has_purchase_details_repository.findById(
      buyer_has_purchase_details_objectId,
    );
  }

  async getBuyerHasPurchaseDetails(
    resPerPage: number,
    pageNo: number,
  ): Promise<BuyerHasPurchaseDetail[]> {
    return this.buyer_has_purchase_details_repository.find(
      {},
      resPerPage,
      pageNo,
    );
  }

  async createBuyerHasPurchaseDetail(
    name: string,
    contact_no: number,
    requirement: string,
    car_number: string,
    call_type_id: string,
    lead_source_id: string,
    lead_type_id: string,
    referral: string,
  ): Promise<BuyerHasPurchaseDetail> {
    return this.buyer_has_purchase_details_repository.create({
      name,
      contact_no,
      car_number,
      call_type_id,
      lead_source_id,
      lead_type_id,
      referral,
      requirement,
    });
  }

  async updateBuyerHasPurchaseDetail(
    buyer_has_purchase_details_objectId: string,
    buyerHasPurchaseDetailUpdateDto: BuyerHasPurchaseDetailUpdate,
  ): Promise<BuyerHasPurchaseDetail> {
    return this.buyer_has_purchase_details_repository.findOneAndUpdate(
      { _id: buyer_has_purchase_details_objectId },
      buyerHasPurchaseDetailUpdateDto,
    );
  }

  async deleteBuyerHasPurchaseDetail(
    buyer_has_purchase_details_objectId: string,
  ): Promise<any> {
    return this.buyer_has_purchase_details_repository.findOneAndDelete({
      _id: buyer_has_purchase_details_objectId,
    });
  }

  async deleteManyBuyerHasPurchaseDetail(
    buyer_has_purchase_details_objectIds: [string],
  ): Promise<boolean> {
    return this.buyer_has_purchase_details_repository.findManyAndDelete(
      buyer_has_purchase_details_objectIds,
    );
  }
}
