import { FC } from 'react'

import Statement from '../../../presentation/pages/statement'

const statements = [
  { id: 1, date: '24/03/2000', value: 'R$ 24,05' },
  { id: 2, date: '24/03/2000', value: 'R$ 24,05' }
]

export const makeStatement: FC = () => {
  return (
   <Statement amount="R$ 295,46" statements={statements}/>
  )
}
