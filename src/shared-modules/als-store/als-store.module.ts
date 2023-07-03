import { Global, Module } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { AlsStoreMiddleware } from './als-store.middleware';

@Global()
@Module({
  providers: [
    { provide: AsyncLocalStorage, useValue: new AsyncLocalStorage() },
    AlsStoreMiddleware,
  ],
  exports: [AsyncLocalStorage, AlsStoreMiddleware],
})
export class AlsStoreModule { }
