import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Dealer, DealerSchema } from "../Schemas/dealer.schema";
import { Model } from "mongoose";
import { EntityRepository } from "src/database/entity.repository";
import { CreateDealerInput } from "../dtos/inputs/create-dealer.input";
import { UpdateDealerInput } from "../dtos/inputs/update-dealer.input";

@Injectable()
export class DealersRepository extends EntityRepository<DealerSchema> {
  constructor(
    @InjectModel(Dealer.name) dealerModel: Model<DealerSchema>,
  ) {
    super(dealerModel);
  }

  public async create(createDealerInput: CreateDealerInput, createOptions?: object): Promise<DealerSchema> {
    const payload = {
      name: createDealerInput.name,
      address: createDealerInput.address,
      email: createDealerInput.email,
      phone: createDealerInput.phone,
    }
    return await super.create(payload, createOptions);
  }


  public async update(updateDealerInput: UpdateDealerInput): Promise<DealerSchema> {
    const payload = {
      name: updateDealerInput.name,
      address: updateDealerInput.address,
      email: updateDealerInput.email,
      phone: updateDealerInput.phone,
    }
    return await this.updateById(updateDealerInput.id, payload);
  }
}
