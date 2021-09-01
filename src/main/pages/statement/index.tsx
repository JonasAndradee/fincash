import { FC, useEffect, useState } from 'react'

import Statement from '../../../presentation/pages/statement'
import { LocalService } from '../../../services/LocalService'

type StatementType = {
  id: number
  date: string
  value: string
}

type StatementsData = {
  balance: string
  statements: StatementType[]
}

export const makeStatement: FC = () => {
  const service = new LocalService()
  const [statementsData, setStatementsData] = useState<StatementsData>({
    balance: 'R$ 0,00',
    statements: []
  })

  const listStatement = async () => {
    try {
      const response = await service.listStatement()
      if (response?.statusCode === 200) {
        setStatementsData(response?.body)
      }
      return response
    } catch (e: any) {
      console.log(e)
      return {}
    }
  }

  useEffect(() => {
    listStatement()
  }, [])

  return (
   <Statement amount={statementsData.balance} statements={statementsData.statements}/>
  )
}
