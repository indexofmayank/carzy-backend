import { Dealer } from "src/features/dealers/Schemas/dealer.schema";
import { UserRoleStore } from "./user-role-store.entity";
export interface UserStore {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role?: UserRoleStore;
  dealer: Dealer
}
