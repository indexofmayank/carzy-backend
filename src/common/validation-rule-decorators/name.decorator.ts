import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class IsValidName implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    if (!text) {
      return false;
    }
    return text.length >= 3 && text.length < 20;
  }

  defaultMessage(args: ValidationArguments) {
    if (!args.value) return args.constraints[0] + ' name cannot be left empty';
    return args.constraints[0] + ' name ($value) is too short or too long!';
  }
}
