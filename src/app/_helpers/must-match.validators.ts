import { FormGroup } from '@angular/forms';

// validador personalizado para verificar se dois campos correspondem
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // retornar se outro validador já encontrou um erro no matchingControl
            return;
        }

        // set erro on matchingControl se a validação falhar
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}