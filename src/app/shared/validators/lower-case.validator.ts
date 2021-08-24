import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl){

  if(control.value.trim() && !/^[A-Za-z0-9_\-]+$/.test(control.value)){
    return{ lowercase: true}
  }
  return null;
}
