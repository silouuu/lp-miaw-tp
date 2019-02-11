import { AbstractControl, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

export function birthdayValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const isTooYoung = moment().diff(control.value, 'years') < 18;

    return isTooYoung ? { 'isTooYoung': { value: control.value } } : null;
  };
}
