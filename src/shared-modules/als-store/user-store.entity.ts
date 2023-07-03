import { UserRoleStore } from './user-role-store.entity';
export interface UserStore {
  id: string;
  first_name: string;
  role?: UserRoleStore;
}
