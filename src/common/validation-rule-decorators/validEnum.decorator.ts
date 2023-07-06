import { ValidatorConstraint } from "@nestjs/class-validator";
import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from "class-validator";
import { EntityStatus } from "../enums/entity-status.enums";

@ValidatorConstraint({ name: "customEnum", async: false })
export class IsValidEnum implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments) {
    if (value === EntityStatus.ACTIVE || EntityStatus.INACTIVE || EntityStatus.DELETED) {
      return true;
    } else return false;
  }

  defaultMessage(validationArguments?: ValidationArguments) {
    ``
    return (
      validationArguments[0] +
      " can only contain " +
      EntityStatus.ACTIVE +
      " " +
      EntityStatus.INACTIVE +
      " " +
      EntityStatus.DELETED
    );
  }
}
