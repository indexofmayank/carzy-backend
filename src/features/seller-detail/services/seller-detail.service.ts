import { Injectable } from "@nestjs/common";
import { SellerDetailRepository } from "../repositories/seller-detail-repository";
import { SellerDetail } from "../schemas/seller-detial.schema";
import { UpdateSellerDetailDto } from "../dtos/seller-detail.update.dto";

@Injectable()
export class SellerDetailService {
  constructor(
    private readonly sellerDetailRepository: SellerDetailRepository,
  ) {}

  async getSellerById(sellerTypeObjectId): Promise<SellerDetail | any> {
    return this.sellerDetailRepository.findById(sellerTypeObjectId);
  }

  async getSellers(
    resPerPage: number,
    pageNo: number,
  ): Promise<SellerDetail[]> {
    return this.sellerDetailRepository.find({}, resPerPage, pageNo);
  }

  async createSeller(
    name: string,
    address: string,
    zip_code: string,
    phone: number,
    alternative_no: number,
    email: string,
    alternate_email: string,
    dob: string,
  ): Promise<SellerDetail> {
    return this.sellerDetailRepository.create({
      name,
      address,
      zip_code,
      phone,
      alternative_no,
      alternate_email,
      email,
      dob,
    });
  }

  async updateSellerDetail(
    sellerTypeObjectId: string,
    updateSellerDetailDto: UpdateSellerDetailDto,
  ): Promise<SellerDetail> {
    return this.sellerDetailRepository.findOneAndUpdate(
      { _id: sellerTypeObjectId },
      updateSellerDetailDto,
    );
  }

  async deleteSingleSeller(sellerTypeObjectId: string): Promise<SellerDetail> {
    return this.sellerDetailRepository.findOneAndDelete({
      _id: sellerTypeObjectId,
    });
  }

  async deleteManySeller(sellerTypeObjectIds: [string]): Promise<boolean> {
    return this.sellerDetailRepository.findManyAndDelete({
      _id: { sellerTypeObjectIds },
    });
  }
}
