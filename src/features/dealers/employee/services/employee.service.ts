import { Injectable } from "@nestjs/common";
import { EmployeeRepository } from "../repositories/employee.repository";
import { DealerHasEmployee } from "../schemas/employee.schema";
import { UpdateEmployeeInput } from "../dtos/inputs/update-employee.input";
import { CreateEmployeeInput } from "../dtos/inputs/create-employee.input";
import { AsyncLocalStorage } from "async_hooks";
import { Store } from "src/shared-modules/als-store/store.entity";
import { UserStoreHelper } from "src/common/helpers/user-store.helper";
import { DealerStatus } from "../../dealer-status.enum";

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository, private readonly als: AsyncLocalStorage<Store>) { }

  async getEmployee(
    resPerPage: number,
    pageNo: number,
  ): Promise<DealerHasEmployee[]> {
    return this.employeeRepository.find({}, resPerPage, pageNo);
  }

  async getEmployeeById(
    dealerHasEmployeeObjectId: string,
  ): Promise<DealerHasEmployee | any> {
    return this.employeeRepository.findById(dealerHasEmployeeObjectId);
  }

  async getEmployeeByEmail(email: string): Promise<DealerHasEmployee | null> {
    const employee = await this.employeeRepository.entityModel.findOne({ email }).populate({
      path: "dealer",
      match: { status: { $in: [DealerStatus.ENQUIRED, DealerStatus.ON_BOARDED] } }
    });
    return employee;
  }

  async createEmployee(
    createEmployeeInput: CreateEmployeeInput,
  ): Promise<DealerHasEmployee | any> {
    const dealerId = UserStoreHelper.getDealerId(this.als);
    const employee = await this.employeeRepository.createEmployee(dealerId, createEmployeeInput);
    return employee;
  }

  async updateEmployee(
    dealerHasEmployeeObjectId: string,
    dealerHasEmployeeUpdateDto: UpdateEmployeeInput,
  ): Promise<DealerHasEmployee | any> {
    return this.employeeRepository.findOneAndUpdate(
      { _id: dealerHasEmployeeObjectId },
      dealerHasEmployeeUpdateDto,
    );
  }

  async deleteSingleEmployee(
    dealerHasEmployeeObjectId: string,
  ): Promise<DealerHasEmployee | any> {
    return this.employeeRepository.findOneAndDelete({
      _id: dealerHasEmployeeObjectId,
    });
  }

  async deleteManyEmployee(
    dealerHasEmployeeObjectIds: [string],
  ): Promise<DealerHasEmployee | boolean | any> {
    return this.employeeRepository.findManyAndDelete({
      employeeId: { dealerHasEmployeeObjectIds },
    });
  }
}
