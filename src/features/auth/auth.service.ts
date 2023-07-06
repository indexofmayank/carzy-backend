import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthenticateDto } from "./auth.dto";
import { IAuthenticate, Role } from "./auth.interface";
import { EmployeeService } from "../dealers/employee/services/employee.service";
import * as bcrypt from "bcrypt";
import { DealerHasEmployee } from "../dealers/employee/schemas/employee.schema";

@Injectable()
export class AuthService {
  constructor(
    private readonly employeeService: EmployeeService,
  ) { }

  async authenticate(authenticateDto: AuthenticateDto): Promise<DealerHasEmployee | null> {
    const employee = await this.employeeService.getEmployeeByEmail(
      authenticateDto.email,
    );
    if (employee) {
      const isPasswordValid = await bcrypt.compare(
        authenticateDto.password,
        employee.password,
      );
      if (isPasswordValid) {

        return employee;
      }
    }
    return null;
  }
}
