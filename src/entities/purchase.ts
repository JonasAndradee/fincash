
export class Purchase {
  code: string;
  amount: string;
  date: string;

  constructor (code: string, amount: string, date:string) {
    if (isEmptyOrNull(code)) {
      throw new Error('Preencha um código')
    }

    if (isEmptyOrNull(amount)) {
      throw new Error('Preencha um valor')
    }

    if (isEmptyOrNull(date)) {
      throw new Error('Preencha uma data')
    }

    this.code = code
    this.amount = amount
    this.date = date
  }

  get getCode (): string {
    return this.code
  }

  get getAmount () : string {
    return this.amount
  }

  get getDate (): string {
    return this.date
  }
}

function isEmptyOrNull (word: string) {
  return !word || word.trim().length === 0
}
