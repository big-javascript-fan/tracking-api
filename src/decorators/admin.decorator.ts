import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const AdminEntity = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    return GqlExecutionContext.create(ctx).getContext().req.admin
  }
);
 