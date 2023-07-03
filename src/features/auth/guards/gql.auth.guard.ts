import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from './jwt.auth.guard';

export class GqlAuthGuard extends JwtAuthGuard {
  getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    /* first exclude the path which is out of authorisation api such as login,forgot password, sign up
    then return true,else call the parent method.
    */
    if (context.getType() === 'http') {
      return true;
    }
    //TODO: skip some of the fields before login
    const isActivated = super.canActivate(context);
    return isActivated;
  }
}
