import { Credential } from '../entities'
import { HttpResponse } from '../adapters/axios/http'

export interface SignInService {
  signInUser: (credential: Credential) => Promise<HttpResponse>;
}

export class SignInInteractor {
  signInService: SignInService;

  constructor (signInService: SignInService) {
    this.signInService = signInService
  }

  async signIn (
    credential: Credential
  ): Promise<HttpResponse> {
    return this.signInService.signInUser(credential)
  }
}
