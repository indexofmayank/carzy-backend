import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticateDto } from './auth.dto';
import { IAuthenticate, Role } from './auth.interface';
import { EmployeeService } from '../dealers/employee/services/employee.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly jwtService: JwtService,
  ) { }

  async authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate> {
    const authData: IAuthenticate = { token: null };
    const employee = await this.employeeService.getEmployeeByEmail(
      authenticateDto.username,
    );
    if (employee) {
      const isPasswordValid = await bcrypt.compare(
        authenticateDto.password,
        employee.password,
      );
      if (isPasswordValid) {
        const tokenPayload = {
          custom_claims: { first_name: employee.first_name },
        };
        const token = this.jwtService.sign(tokenPayload);
        authData.token = token;
        return authData;
      }
    }
    return {} as IAuthenticate;
  }
}
