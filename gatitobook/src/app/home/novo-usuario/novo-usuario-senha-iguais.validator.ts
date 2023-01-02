import { FormGroup } from '@angular/forms';

export function novoUsuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value ?? '';
  const repassword = formGroup.get('repassword')?.value ?? '';

  if (password.trim() + repassword.trim()) {
    return password == repassword ? null : { RepasswordIgualPassword: true };
  } else {
    return null;
  }
}
