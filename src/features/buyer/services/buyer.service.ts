import { Injectable } from '@nestjs/common';
import { Buyer } from '../schemas/buyers.schema';
import { UpdateBuyerDto } from '../dtos/update.buyer.dto';
import { BuyerRepository } from '../repositories/buyers.repository';

@Injectable()
export class BuyersService {
  constructor(private readonly buyersRepository: BuyerRepository) {}

  async getBuyerById(buyerObjectId): Promise<Buyer | any> {
    return this.buyersRepository.findById(buyerObjectId);
  }

  async getBuyers(resPerPage: number, pageNo: number): Promise<Buyer[]> {
    return this.buyersRepository.find({}, resPerPage, pageNo);
  }

  async createBuyer(
    name: string,
    contact_no: number,
    address: any,
    referral: string,
    email: string,
    status: string,
    dealer_id: string,
    dob: string,
    doa: string,
    spouse_details: any,
  ): Promise<Buyer> {
    return this.buyersRepository.create({
      name,
      contact_no,
      address,
      referral,
      email,
      status,
      dealer_id,
      dob,
      doa,
      spouse_details,
    });
  }

  async updateBuyer(
    buyerId: string,
    updateBuyerDto: UpdateBuyerDto,
  ): Promise<Buyer> {
    return this.buyersRepository.findOneAndUpdate(
      { _id: buyerId },
      updateBuyerDto,
    );
  }

  async deleteBuyer(buyerId: string): Promise<any> {
    return this.buyersRepository.findOneAndDelete({ _id: buyerId });
  }

  async deleteManyBuyer(buyerIds: [string]): Promise<boolean> {
    return this.buyersRepository.findManyAndDelete({ buyerId: { buyerIds } });
  }
}
