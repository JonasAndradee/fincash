
import { SignUpService } from '../useCases'
import { Credential, User } from '../entities'
import { HttpResponse } from '../adapters/axios/http'
import axiosRequest from '../frameworks/axios'

export class LocalService implements SignUpService {
  async signUpUser (user: User, credential: Credential): Promise<HttpResponse> {
    const response = await axiosRequest({ url: 'signup', method: 'post', body: { ...user, ...credential } })
    return response
  }
}
