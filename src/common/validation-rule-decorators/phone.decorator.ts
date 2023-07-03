import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customPhone', async: false })
export class customPhoneLength implements ValidatorConstraintInterface {
  validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    if (!value) return false;

    if (value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
      return true;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    if (!validationArguments.value) {
      return validationArguments.constraints[0] + ' cannot left empty';
    }

    return 'Please enter a valid ' + validationArguments.constraints[0];
  }
}
