import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { AsyncLocalStorage } from "async_hooks";
import { ExtractJwt, Strategy } from "passport-jwt";
import { EmployeeService } from "src/features/dealers/employee/services/employee.service";
import { Store } from "src/shared-modules/als-store/store.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly alc: AsyncLocalStorage<Store>,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("jwt.secret"),
    });
  }

  async validate(userData: any) {
    const validatedData = await this.employeeService.getEmployeeByEmail(
      userData.custom_claims.email,
    );
    if (validatedData) {
      this.saveToStore(validatedData);
    }
    return validatedData;
  }

  saveToStore(userData: any) {
    if (userData) {
      const store = this.alc.getStore() as Store;
      store.userStore = userData;
    }
  }
}
