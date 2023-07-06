import { Injectable } from "@nestjs/common";
import { DealersRepository } from "../repositories/dealer.repository";
import { Dealer } from "../Schemas/dealer.schema";
import { CreateDealerInput } from "../dtos/inputs/create-dealer.input";
import { UpdateDealerInput } from "../dtos/inputs/update-dealer.input";
import { EmployeeRepository } from "../employee/repositories/employee.repository";
import { CreateEmployeeInput } from "../employee/dtos/inputs/create-employee.input";
import * as mongoose from "mongoose";
import { InjectConnection } from "@nestjs/mongoose";

@Injectable()
export class DealersService {
  constructor(private readonly dealerRepository: DealersRepository, private readonly employeeRepository: EmployeeRepository, @InjectConnection() private readonly connection: mongoose.Connection) { }

  async getDealers(
    resPerPage: number,
    pageNo: number,
  ): Promise<Dealer[] | any> {
    return this.dealerRepository.find({}, resPerPage, pageNo);
  }

  async getDealerById(dealerId: string): Promise<Dealer | any> {
    return this.dealerRepository.findById(dealerId);
  }

  async createDealer(createDealerInput: CreateDealerInput): Promise<Dealer> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const dealer = await this.dealerRepository.create(createDealerInput, { session });
      const empInput: CreateEmployeeInput = { first_name: createDealerInput.name, last_name: createDealerInput.name, password: createDealerInput.password, phone: createDealerInput.phone, email: createDealerInput.email };
      await this.employeeRepository.createEmployee(dealer["_id"], empInput, { session });
      await session.commitTransaction();
      return dealer;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  async updateDealer(updateDealerInput: UpdateDealerInput): Promise<Dealer> {
    return await this.dealerRepository.update(updateDealerInput);
  }

  async deleteDealer(dealerId: string): Promise<Dealer | any> {
    return this.dealerRepository.findOneAndDelete({ _id: dealerId });
  }

  async deleteManyDealer(dealerIds: [string]): Promise<Dealer | boolean> {
    return this.dealerRepository.findManyAndDelete(dealerIds);
  }
}
