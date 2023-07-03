import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DealerHasEmployee, EmployeeSchema } from '../schemas/employee.schema';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class EmployeeRepository extends EntityRepository<EmployeeSchema> {
  constructor(
    @InjectModel(DealerHasEmployee.name)
    private employee: Model<EmployeeSchema>,
  ) {
    super(employee);
  }
}
