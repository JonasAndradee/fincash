import { Email } from './email'

export class Credential {
  email: Email;
  password: string;

  constructor (email: string, password: string) {
    if (isInvalid(password)) {
      throw new Error('Sua senha deve conter apenas letras e números')
    }

    this.password = password
    this.email = new Email(email)
  }

  get getEmail (): string {
    return this.email.address
  }

  get getpassword (): string {
    return this.password
  }
}

function isInvalid (password: string) {
  const passwordRegex = /^[a-zA-Z0-9_.-]*$/
  return !passwordRegex.test(password)
}
