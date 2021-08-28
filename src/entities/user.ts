
import { Email } from './email'

export class User {
  name: string;
  cpf: string;
  email: Email;

  constructor (name: string, cpf: string, email:string) {
    if (isEmptyOrNull(name)) {
      throw new Error('Preencha o seu nome completo')
    }

    this.name = name
    this.cpf = cpf
    this.email = new Email(email)
  }

  get getEmail (): string {
    return this.email.address
  }

  get getName () : string {
    return this.name
  }

  get getCpf (): string {
    return this.cpf
  }
}

function isEmptyOrNull (word: string) {
  return !word || word.trim().length === 0
}
