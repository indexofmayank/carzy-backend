import { Injectable } from '@nestjs/common';
import { DealersRepository } from '../repositories/dealer.repository';
import { Dealer } from '../Schemas/dealer.schema';
import { DealerUpdateDto } from '../dtos/dealer.update.dto';

@Injectable()
export class DealersService {
  constructor(private readonly dealerRespository: DealersRepository) {}

  async getDealers(
    resPerPage: number,
    pageNo: number,
  ): Promise<Dealer[] | any> {
    return this.dealerRespository.find({}, resPerPage, pageNo);
  }

  async getDealerById(dealerId: string): Promise<Dealer | any> {
    return this.dealerRespository.findById(dealerId);
  }

  async createDealer(
    name: string,
    address: string,
    status: string,
    email: string,
    phone: string,
  ): Promise<Dealer | any> {
    return this.dealerRespository.create({
      name,
      address,
      status,
      email,
      phone,
    });
  }

  async updateDealer(
    dealerId: string,
    updateDealerDto: DealerUpdateDto,
  ): Promise<Dealer | any> {
    return this.dealerRespository.findOneAndUpdate(
      { _id: dealerId },
      updateDealerDto,
    );
  }

  async deleteDealer(dealerId: string): Promise<Dealer | any> {
    return this.dealerRespository.findOneAndDelete({ _id: dealerId });
  }

  async deleteManyDealer(dealerIds: [string]): Promise<Dealer | boolean> {
    return this.dealerRespository.findManyAndDelete(dealerIds);
  }
}
