import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => String)
export class AppResolver {
  @Query(() => String)
  index(): string {
    return 'Working inside graphql';
  }
}
