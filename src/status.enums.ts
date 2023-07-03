import { registerEnumType } from '@nestjs/graphql';

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}

registerEnumType(Status, {
  name: 'Status',
});
