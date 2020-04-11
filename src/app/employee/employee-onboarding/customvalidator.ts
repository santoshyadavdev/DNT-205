import { AbstractControl } from '@angular/forms';

export class FormValidator {
    static validateName(control: AbstractControl) {
        const name = control.value as string;
        if (name.includes('test')) {
            return { inValidName: true }
        }
        return null;
    }
}