import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => Date)
  hello() {
    return new Date();
  }

  @Query(() => BigInt)
  bigintTest() {
    return BigInt(1);
  }
}
