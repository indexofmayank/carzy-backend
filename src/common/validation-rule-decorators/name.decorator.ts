import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customTName', async: false })
export class IsValidName implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    if (!text) {
      return false;
    }
    return text.length >= 2 && text.length < 100;
  }

  defaultMessage(args: ValidationArguments) {
    if (!args.value) return args.constraints[0] + ' name cannot be left empty';
    return args.constraints[0] + ' name ($value) is too short or too long!';
  }
}
