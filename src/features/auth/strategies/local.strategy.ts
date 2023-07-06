import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {
    super({ usernameField: "email" });
  }

  async validate(email: string, password: string) {
    const employeeData = await this.authService.authenticate({
      email: email,
      password,
    });
    if (employeeData) {
      const tokenPayload = {
        custom_claims: employeeData,
      };
      const token = this.jwtService.sign(tokenPayload);
      console.log({ access_token: token, data: employeeData });

      return { access_token: token, employee: employeeData };
    }
    return null;
  }
}
