import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { DealerHasEmployee } from './schemas/employee.schema';
import { EmployeeService } from './services/employee.service';
import { CreateEmployeeInput } from './dtos/inputs/create-employee.input';
import { UpdateEmployeeInput } from './dtos/inputs/update-employee.input';

@Resolver()
export class DealerHasEmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [DealerHasEmployee], {
    name: 'listDealerHasEmployee',
    nullable: true,
  })
  async list(): Promise<DealerHasEmployee[] | any> {
    return this.employeeService.getEmployee(3, 1);
  }

  @Query(() => DealerHasEmployee, {
    name: 'getDealerHasEmployeeDetail',
    nullable: true,
  })
  async listDealerHasEmployeeDetail(
    @Args({ name: 'employeeId', type: () => ID }) id: string,
  ): Promise<DealerHasEmployee | any> {
    return this.employeeService.getEmployeeById(id);
  }

  @Mutation(() => DealerHasEmployee, {
    name: 'addDealerHasEmployee',
    nullable: true,
  })
  async addDealerHasEmployee(
    @Args('addDealerHasEmployeeDto')
    createEmployeeInput: CreateEmployeeInput,
  ): Promise<DealerHasEmployee | any> {
    return await this.employeeService.createEmployee(createEmployeeInput);
  }

  @Mutation(() => DealerHasEmployee, {
    name: 'updateDealerHasEmployee',
    nullable: true,
  })
  async updateDealerHasEmployee(
    @Args({ name: 'employeeId', type: () => ID }) id: string,
    @Args('updateDealerHasEmployeeDto')
    updateEmployeeInput: UpdateEmployeeInput,
  ): Promise<DealerHasEmployee | any> {
    return this.employeeService.updateEmployee(id, updateEmployeeInput);
  }

  @Mutation(() => DealerHasEmployee, {
    name: 'deleteDealerHasEmployee',
    nullable: true,
  })
  async deleteDealerHasEmployee(
    @Args({ name: 'employeeId', nullable: true }) employeeId: string,
  ): Promise<DealerHasEmployee | any> {
    return this.employeeService.deleteSingleEmployee(employeeId);
  }

  @Mutation(() => DealerHasEmployee, {
    name: 'deleteManyDealerHasEmployee',
    nullable: true,
  })
  async deleteManyDealerHasEmployee(
    @Args({ name: 'employeeIds', type: () => [ID] }) employeeIds: [string],
  ): Promise<DealerHasEmployee | boolean | any> {
    return this.employeeService.deleteManyEmployee(employeeIds);
  }
}
