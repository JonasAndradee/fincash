import { Credential, User } from '../entities'
import { HttpResponse } from '../adapters/axios/http'

export interface SignUpService {
  signUpUser: (user: User, credential: Credential) => Promise<HttpResponse>;
}

export class SignUpInteractor {
  signUpService: SignUpService;

  constructor (signUpService: SignUpService) {
    this.signUpService = signUpService
  }

  async signUp (
    name: string,
    cpf: string,
    credential: Credential
  ): Promise<HttpResponse> {
    const user = new User(name, cpf, credential.email.address)
    return this.signUpService.signUpUser(user, credential)
  }
}
