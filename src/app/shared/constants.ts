export default {
  EMAIL_VALIDATE:
    '^([\\w\\d_\\-])+(([^\\.]*\\.[^\\.]*)?){1,3}@([\\w\\d]){1,5}(.com|.co|.org|.net|.us)',
  PASSWORD_VALIDATE:
    '(?=.*[\\d])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[\\d\\w!@#$%^&*]{5,}',
  NAME_VALIDATE: '^[a-zA-Z\\s|-]*$',
  EXPIRE_MASSAGE:
    'Your current session has expired. Please login again to continue using this app!',
  BASE_URL: `https://superheroapi.com/api.php/173178867662456`,
};
