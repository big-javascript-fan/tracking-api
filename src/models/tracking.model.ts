import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tracking {
  @Field({ description: 'IP address' })
  ipAddress: string;

  @Field({ description: 'Tag' })
  tag: string;

  @Field()
  count: number;
}
