import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DealerHasEmployee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeeRepository } from './repositories/employee.repository';
import { EmployeeService } from './services/employee.service';
import { DealerHasEmployeeResolver } from './employee.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DealerHasEmployee.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [],
  providers: [EmployeeRepository, EmployeeService, DealerHasEmployeeResolver],
  exports: [EmployeeService],
})
export class EmployeeModule { }
