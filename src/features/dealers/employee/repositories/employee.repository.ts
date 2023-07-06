import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DealerHasEmployee, EmployeeSchema } from "../schemas/employee.schema";
import { Model } from "mongoose";
import { EntityRepository } from "src/database/entity.repository";
import { CreateEmployeeInput } from "../dtos/inputs/create-employee.input";

@Injectable()
export class EmployeeRepository extends EntityRepository<EmployeeSchema> {
  constructor(
    @InjectModel(DealerHasEmployee.name)
    employee: Model<EmployeeSchema>
  ) {
    super(employee);
  }

  public createEmployee(dealerId: string, createEmployeeInput: CreateEmployeeInput, createOptions?: object): Promise<EmployeeSchema> {
    const payload = {
      first_name: createEmployeeInput.first_name,
      last_name: createEmployeeInput.last_name,
      phone: createEmployeeInput.phone,
      email: createEmployeeInput.email,
      dealer: dealerId,
      password: createEmployeeInput.password,
    };
    return this.create(payload, createOptions);
  }

}
