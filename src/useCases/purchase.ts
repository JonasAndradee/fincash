import { HttpResponse } from '../adapters/axios/http'
import { Purchase } from '../entities/purchase'

export interface PurchaseService {
  listPurchase: () => Promise<HttpResponse>;
  createPurchase: (purchase: Purchase) => Promise<HttpResponse>;
}

export class PurchaseInteractor {
  purchaseService: PurchaseService;

  constructor (listPurchaseService: PurchaseService) {
    this.purchaseService = listPurchaseService
  }

  async listPurchaseAll (): Promise<HttpResponse> {
    return this.purchaseService.listPurchase()
  }

  async createPurchase (
    purchase: Purchase
  ): Promise<HttpResponse> {
    return this.purchaseService.createPurchase(purchase)
  }
}
