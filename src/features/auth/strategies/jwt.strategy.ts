import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { AsyncLocalStorage } from 'async_hooks';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EmployeeService } from 'src/features/dealers/employee/services/employee.service';
import { Store } from 'src/shared-modules/als-store/store.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly alc: AsyncLocalStorage<any>,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret'),
    });
  }

  validate(userData: any) {
    const validatedData = this.employeeService.getEmployeeByEmail(
      userData.custom_claims.username,
    );
    this.saveToStore(validatedData);
    return validatedData;
  }

  saveToStore(userData: any) {
    if (userData) {
      const store = this.alc.getStore() as Store;
      store.userStore = userData;
    }
  }
}
