import { FormControl } from '@angular/forms';

export class PasswordValidate {
  static uniqPassword(control: FormControl): { [key: string]: boolean } {
    const email = control.parent?.controls['email'].value
      .split('@')[0]
      .toLowerCase();
    const firstNameWithSpace = control.parent?.controls['name'].value.split(
      ' '
    )[0];
    const secondNameWithSpace = control.parent?.controls['name'].value.split(
      ' '
    )[1];
    const firstNameWithDash = control.parent?.controls['name'].value.split(
      '-'
    )[0];
    const secondNameWithDash = control.parent?.controls['name'].value.split(
      '-'
    )[1];
    const password = control.value;

    if (password.includes(email)) {
      return {
        emailIncludes: true,
      };
    }

    if (password.includes(firstNameWithSpace)) {
      return {
        firstNameWithSpaceIncludes: true,
      };
    }

    if (password.includes(secondNameWithSpace)) {
      return {
        secondNameWithSpaceIncludes: true,
      };
    }

    if (password.includes(firstNameWithDash)) {
      return {
        firstNameWithDashIncludes: true,
      };
    }

    if (password.includes(secondNameWithDash)) {
      return {
        secondNameWithDashIncludes: true,
      };
    }
    return null;
  }
}
