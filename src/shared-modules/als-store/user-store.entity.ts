import { UserRoleStore } from './user-role-store.entity';
export interface UserStore {
  id: string;
  role: UserRoleStore;
}
