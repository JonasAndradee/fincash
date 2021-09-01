import { HttpResponse } from '../adapters/axios/http'

export interface StatementService {
  listStatement: () => Promise<HttpResponse>;
}

export class StatementInteractor {
  statementService: StatementService;

  constructor (listStatementService: StatementService) {
    this.statementService = listStatementService
  }

  async listStatementAll (): Promise<HttpResponse> {
    return this.statementService.listStatement()
  }
}
