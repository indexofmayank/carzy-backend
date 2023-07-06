import { AsyncLocalStorage } from "async_hooks";
import { Dealer } from "src/features/dealers/Schemas/dealer.schema";
import { Store } from "src/shared-modules/als-store/store.entity";
import { UserStore } from "src/shared-modules/als-store/user-store.entity";

export class UserStoreHelper {

    public static getUserStore(als: AsyncLocalStorage<Store>): UserStore {
        return UserStoreHelper.getStore(als).userStore;
    }

    public static getStore(als: AsyncLocalStorage<Store>): Store {
        return als.getStore() as Store;
    }

    public static getDealer(als: AsyncLocalStorage<Store>): Dealer {
        return UserStoreHelper.getUserStore(als).dealer;
    }

    public static getDealerId(als: AsyncLocalStorage<Store>): string {
        return UserStoreHelper.getDealer(als)["_id"];
    }

}