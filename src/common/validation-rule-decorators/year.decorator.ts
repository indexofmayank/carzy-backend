import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';

  @ValidatorConstraint({name: 'customYearChecker', async: false})
  export class IsValidYear implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        if(!value){
            return false;
        }

        return value >= 1991 && value < new Date().getFullYear()
    }


    defaultMessage(validationArguments?: ValidationArguments) {
        if(!validationArguments.value) return validationArguments.constraints[0] + 'year cannot be left empty';
        return validationArguments.constraints[0] + ' given year is not applicable';
    }
  }