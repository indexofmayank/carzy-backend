import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Buyer, BuyerSchema } from '../schemas/buyers.schema';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class BuyerRepository extends EntityRepository<BuyerSchema> {
  constructor(@InjectModel(Buyer.name) private buyerModel: Model<BuyerSchema>) {
    super(buyerModel);
  }
}
