import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dealer, DealerSchema } from '../Schemas/dealer.schema';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class DealersRepository extends EntityRepository<DealerSchema> {
  constructor(
    @InjectModel(Dealer.name) private dealerModel: Model<DealerSchema>,
  ) {
    super(dealerModel);
  }
}
