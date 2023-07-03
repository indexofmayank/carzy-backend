import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import mongoose from 'mongoose';

@ValidatorConstraint({ name: 'checkMongoId', async: false })
export class IsValidMongooseId implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    if (!value) {
      return false;
    }
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      if (!mongoose.Types.ObjectId.isValid(element)) return false;
    } 
    return true;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    if (!validationArguments.value) {
      return validationArguments.constraints[0] + ' cannot left empty';
    }
    return 'Please select a valid ' + validationArguments.constraints[0];
  }
}
