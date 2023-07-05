import { ValidatorConstraint } from '@nestjs/class-validator';
import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Status } from 'src/status.enums';

@ValidatorConstraint({ name: 'customEnum', async: false })
export class IsValidEnum implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments) {
    if (value === Status.ACTIVE || Status.INACTIVE || Status.DELETED) {
      return true;
    } else return false;
  }

  defaultMessage(validationArguments?: ValidationArguments) {
    return (
      validationArguments[0] +
      ' can only contain ' +
      Status.ACTIVE +
      ' ' +
      Status.INACTIVE +
      ' ' +
      Status.DELETED
    );
  }
}
