import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthenticateDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthOutputDto } from './auth.output';

@Resolver(() => AuthenticateDto)
export class AuthResolver {
  constructor(public readonly authService: AuthService) {}

  @Mutation(() => AuthOutputDto)
  async login(
    @Args('authenticateDto') authenticateDto: AuthenticateDto,
  ): Promise<string | any> {
    return this.authService.authenticate(authenticateDto);
  }
}
