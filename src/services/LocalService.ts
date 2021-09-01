
import { SignUpService, SignInService, PurchaseService, StatementService } from '../useCases'
import { Credential, User } from '../entities'
import { HttpResponse } from '../adapters/axios/http'
import axiosRequest from '../frameworks/axios'
import { Purchase } from '../entities/purchase'

export class LocalService implements SignUpService, SignInService, PurchaseService, StatementService {
  async signUpUser (user: User, credential: Credential): Promise<HttpResponse> {
    const response = await axiosRequest({ url: 'signup', method: 'post', body: { ...user, ...credential } })
    return response
  }

  async signInUser (credential: Credential): Promise<HttpResponse> {
    const response = await axiosRequest({ url: 'auth', method: 'post', body: credential })
    return response
  }

  async listPurchase (): Promise<HttpResponse> {
    const response = await axiosRequest({ url: 'purchase', method: 'get' })
    return response
  }

  async createPurchase (purchase: Purchase): Promise<HttpResponse> {
    const response = await axiosRequest({ url: 'create/purchase', method: 'post', body: purchase })
    return response
  }

  async listStatement (): Promise<HttpResponse> {
    const response = await axiosRequest({ url: 'statement', method: 'get' })
    return response
  }
}
