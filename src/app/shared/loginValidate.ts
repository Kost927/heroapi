import { FormControl } from '@angular/forms';

export class LoginValidate {
  static existEmail(control: FormControl): { [key: string]: boolean } {
    const allUsers = JSON.parse(localStorage.getItem('allUsers'));

    const emailVal = (el: { email: string }) => el.email === control.value;

    if (!allUsers.some(emailVal)) {
      return {
        emailValidator: true,
      };
    }

    return null;
  }

  static existPassword(control: FormControl): { [key: string]: boolean } {
    const allUsers = JSON.parse(localStorage.getItem('allUsers'));

    const emailValue = control.parent?.controls['currentEmail'].value;

    const passwordVal = (el: { password: string; email: string }) =>
      el.password === control.value && el.email === emailValue;

    if (!allUsers.some(passwordVal)) {
      return {
        passwordValidator: true,
      };
    }

    return null;
  }
}
