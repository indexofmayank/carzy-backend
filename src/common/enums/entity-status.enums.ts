import { registerEnumType } from "@nestjs/graphql";

export enum EntityStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  DELETED = "deleted",
}

registerEnumType(EntityStatus, {
  name: "EntityStatus",
});
