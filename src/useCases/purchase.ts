import { HttpResponse } from '../adapters/axios/http'

export interface PurchaseService {
  listPurchase: () => Promise<HttpResponse>;
}

export class PurchaseInteractor {
  purchaseService: PurchaseService;

  constructor (listPurchaseService: PurchaseService) {
    this.purchaseService = listPurchaseService
  }

  async listPurchaseAll (): Promise<HttpResponse> {
    return this.purchaseService.listPurchase()
  }
}
