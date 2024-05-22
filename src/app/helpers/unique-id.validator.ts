import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import jsonArray from './data.json';

export function uniqueIdValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const existingIds = jsonArray.map(p => p.id);
        const id = control.value;
        if (existingIds.includes(id)) {
            return { uniqueId: true };
        }
        return null;
    };
}