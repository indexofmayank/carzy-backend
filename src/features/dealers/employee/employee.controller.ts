// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Post,
//   Put,
//   Delete,
// } from '@nestjs/common';
// import { EmployeeService } from './services/employee.service';
// import { Employee } from './schemas/employee.schema';
// import { CreateEmployeeInput } from './dtos/inputs/create-employee.input';

// @Controller('dealerHasEmployee')
// export class DealerHasEmployeeController {
//   constructor(public readonly dealerHasEmployeeService: EmployeeService) { }

//   @Get()
//   async getEmployee(): Promise<Employee[]> {
//     return this.dealerHasEmployeeService.getEmployee(3, 1);
//   }

//   @Get(':employeeObjectId')
//   async getEmployeeDetail(employeeId: string): Promise<Employee | any> {
//     return this.dealerHasEmployeeService.getEmployeeById(employeeId);
//   }

//   @Post()
//   async createEmployee(
//     createEmployeeInput: CreateEmployeeInput,
//   ): Promise<Employee | any> {
//     return this.dealerHasEmployeeService.createEmployee(createEmployeeInput);
//   }

//   @Put(':employeeId')
//   async updateEmployee(
//     @Param('employeeId') employeeId: string,
//     @Body('updateDealerHasEmployeeUpdateDto')
//     updateDealerHasEmployeeUpdateDto: DealerHasEmployeeUpdateDto,
//   ): Promise<DealerHasEmployee | any> {
//     return this.dealerHasEmployeeService.updateEmployee(
//       employeeId,
//       updateDealerHasEmployeeUpdateDto,
//     );
//   }

//   @Delete(':employeeId')
//   async deleteEmployee(
//     @Param('employeeId') employeeId: string,
//   ): Promise<DealerHasEmployee | any> {
//     return this.dealerHasEmployeeService.deleteSingleEmployee(employeeId);
//   }

//   @Delete()
//   async deleteManyEmployee(
//     @Body() employeeIds: [string],
//   ): Promise<DealerHasEmployee | any | boolean> {
//     return this.dealerHasEmployeeService.deleteManyEmployee(employeeIds);
//   }
// }
