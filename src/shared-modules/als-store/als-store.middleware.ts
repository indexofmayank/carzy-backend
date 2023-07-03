import { Injectable, NestMiddleware } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { Store } from './store.entity';

@Injectable()
export class AlsStoreMiddleware implements NestMiddleware {
  constructor(private readonly als: AsyncLocalStorage<Store>) { }

  use(req: any, res: any, next: (error?: any) => void) {
    const store: Store = {};
    this.als.run(store, () => next());
  }
}
